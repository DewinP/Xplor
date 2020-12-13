// import { Field, ObjectType } from "type-graphql";
// import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
// import { Post } from "./Post";
// import {User} from './User'

// @ObjectType()
// @Entity({ name: "communities" })
// export class Community {
//   @Field()  
//   @PrimaryGeneratedColumn("uuid")
//   id: string;

//   @Field()
//   @Column({ length: 10, unique:true, nullable: false})
//   name: string

//   @Field()
//   @Column({type: 'int', default:1})
//   memberCount: number;

//   @Field()
//   @OneToMany(()=> Post, (post) => post.community)
//   posts: Post[];

//   @Field()
//   @ManyToOne(()=> User, (user) => user.communities)
//   members: User[];

//   @Field()
//   @ManyToOne(()=> User, (user) => user.myCommunities)
//   creator: User;

//   @Field()
//   @Column()
//   lastPost: Date


// }
