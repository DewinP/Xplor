// import {
//     Arg,
//     Ctx,
//     Field,
//     InputType,
//     Mutation,
//     ObjectType,
//     Query,
//     Resolver,
//   } from "type-graphql";
//   import { getRepository } from "typeorm";
//   import { User } from "../entity/User";
//   import { MyContext } from "../types";
//   import { Post } from "../entity/Post";  

//   @InputType()
//   export class PostInput {
//     @Field()
//     title: string;
//     @Field()
//     body: string;
//   }

//   @Resolver()
//   export class postResolver{
//     @Query(() => Post, { nullable: true })
//     post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
//     return Post.findOne(id);
//   }
//   }