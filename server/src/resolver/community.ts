// import {
//     Arg,
//     Ctx,
//     Field,
//     Mutation,
//     ObjectType,
//     Resolver,
//   } from "type-graphql";
// import { getRepository } from "typeorm";
// import { Community } from "../entity/Community";
// import { User } from "../entity/User";
// import { MyContext } from "../types";


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

//   Resolver()
//   export class communityResolver{
//    @Mutation(()=>Community)
//    async createCommunity(
//        @Arg("name") name: string,
//        @Ctx() { req }: MyContext
//        ):Promise<Community>{
//         const userRepo = getRepository(User)
//         const user = await userRepo.findOne({where: {id: req.body.userId}})
//         let community;
//        if(user){
//         try {
//             const communityRepo = getRepository(Community)
//             community = communityRepo.create({
//                 name: name,
//                 owner: user.id
//             })
//             await communityRepo.save(community)
//         } catch (error) {
            
//         }
//        }
        


//         return {community}
//    }
    
//   } 