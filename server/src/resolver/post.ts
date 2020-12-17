import {
  Arg,
  Ctx,
  //   Ctx,
  //   Mutation,
  //   ObjectType,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { getRepository } from "typeorm";

// import { User } from "../entity/User";
import { Post } from "../entity/Post";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";

@InputType()
export class PostInput {
  @Field()
  title: string;
  @Field()
  body: string;
  @Field()
  communityId: number;
}

@Resolver()
export class postResolver {
  //createPost, creates a post
  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    let post;
    // let isMember = getRepository(Community).findOne({
    //   relations: ["members"],
    //   where: {
    //     user: {
    //       id: req.session.userId,
    //     },
    //   },
    // });

    post = getRepository(Post).create({
      authorId: req.session.userId,
      title: input.title,
      body: input.body,
      communityId: input.communityId,
    });
    await getRepository(Post).save(post);

    return post;
  }

  //post, gets a single post per id
  @Query(() => Post, { nullable: true })
  post(@Arg("id") id: number): Promise<Post | undefined> {
    let postRepo = getRepository(Post);
    return postRepo.findOne(id);
  }

  //communityPost, gets all post in said community
  @Query(() => [Post], { nullable: true })
  communityPosts(@Arg("communityId") communityId: number): Promise<Post[]> {
    let postRepo = getRepository(Post);
    return postRepo.find({
      where: {
        communityId: communityId,
      },
    });
  }
}
