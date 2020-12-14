import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { getRepository } from "typeorm";
import { Community } from "../entity/Community";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";

@InputType()
export class CommunityInput {
  @Field()
  name: string;

  @Field()
  title: string;

  @Field()
  description: string;
}
// @ObjectType()
// class CommunityResponse {
//   @Field(() => [FieldError], { nullable: true })
//   errors?: FieldError[];

//   @Field(() => Community, { nullable: true })
//   community?: Community;
// }

// //defining error type so that we can return an error if one takes place
// @ObjectType()
// class FieldError {
//   @Field()
//   field: string;
//   @Field()
//   message: string;
// }

Resolver();
export class communityResolver {
  @Mutation(() => Community)
  @UseMiddleware(isAuth)
  async createCommunity(
    @Arg("input") input: CommunityInput,
    @Ctx() { req }: MyContext
  ): Promise<Community> {
    let community;
    const communityRepo = getRepository(Community);
    community = communityRepo.create({
      name: input.name,
      title: input.title,
      description: input.description,
      ownerId: req.session.userId,
    });
    await communityRepo.save(community);

    return community;
  }

  @Query(() => Community)
  async community(
    @Arg("name", () => String) name: string
  ): Promise<Community | undefined> {
    const communityRepo = getRepository(Community);
    return communityRepo.findOne({ name: name });
  }

  @Query(() => [Community])
  async allCommunties(): Promise<Community[] | undefined> {
    const communityRepo = getRepository(Community);
    let communites = await communityRepo.find();
    console.log(communites);
    if (!communites) throw new Error("No communities");
    return communites;
  }
}
