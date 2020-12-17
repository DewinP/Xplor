import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { MyContext } from "../types";
import argon2 from "argon2";
import { validateRegister } from "../utils/validateRegister";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { v4 } from "uuid";
import { sendEmail } from "../utils/sendEmail";
import { Community } from "../entity/Community";

@InputType()
export class UserInput {
  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  avatar: string;
}

//defining error type so that we can return an error if one takes place
@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

//defining the type of response. Could be either a User or a Error type
@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class userResolver {
  //subbedCommunities, get users communityes where user is admin
  @Query(() => [Community], { nullable: true })
  subbedCommunities(): Promise<Community[] | undefined> {
    let communityRepo = getRepository(Community);
    return communityRepo.find({ relations: ["members"] });
  }

  //ownedCommunities, get users communityes where user is admin
  @Query(() => [Community], { nullable: true })
  ownedCommunities(
    @Ctx() { req }: MyContext
  ): Promise<Community[] | undefined> {
    let communityRepo = getRepository(Community);
    return communityRepo.find({
      where: {
        ownerId: req.session.userId,
      },
    });
  }
  //Signup Mutation to create a new user
  @Mutation(() => UserResponse)
  async signup(
    @Arg("input") input: UserInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const errors = validateRegister(input);
    if (errors) {
      return { errors };
    }
    const hashedPass = await argon2.hash(input.password);

    let user;
    try {
      const userRepo = getRepository(User);
      user = userRepo.create({
        username: input.username,
        email: input.email,
        avatar: input.avatar,
        password: hashedPass,
      });
      await userRepo.save(user);

      req.session.userId = user.id;
    } catch (error) {
      //is there any duplicaiton
      if (error.code === "23505") {
        //duplicate username error
        if (error.detail.includes("username")) {
          return {
            errors: [
              {
                field: "username",
                message: "username has already been taken",
              },
            ],
          };
        } else {
          return {
            errors: [
              {
                field: "email",
                message: "There is an account registered with this email",
              },
            ],
          };
        }
      }
    }

    return { user };
  }

  //Login
  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );
    //validation
    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "that username doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, password);

    //check if password is correct
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password",
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }

  //Me query to see if user is logged in
  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    //user is not logged in
    if (!req.session.userId) {
      return null;
    }
    const userRepo = getRepository(User);
    console.log("heheheheh", req.session.userId);

    return userRepo.findOne(req.session.userId);
  }

  //Logout. Destroy cookie
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }

  //Forgot password
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    const userRepo = getRepository(User);
    const user = await userRepo.findOne({ where: { email } });
    if (!user) {
      // the email is not in the db. We stil return true for security purposes
      return true;
    }

    const token = v4();

    await redis.set(
      FORGET_PASSWORD_PREFIX + token,
      user.id,
      "ex",
      1000 * 60 * 60 * 24 * 3 // will last 3 days
    );

    await sendEmail(
      email,
      `<a href="http://localhost:3000/change-password/${token}"> >>>>>>> Click here to reset password <<<<<<< </a>`
    );

    return true;
  }
}
