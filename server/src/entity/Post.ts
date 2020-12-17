import { Field, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Community } from "./Community";
import { User } from "./User";

@ObjectType()
@Entity({ name: "posts" })
export class Post {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ length: 70 })
  title: string;

  @Field()
  @Column({ type: "text" })
  body: string;

  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @Field()
  @Column()
  authorId: number;

  @ManyToOne(() => Community, (community) => community.posts)
  community: Community;

  @Field()
  @Column()
  communityId: number;

  // @Field()
  // @Column({ type: "int", default: 0 })
  // votes: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
