import { Field, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  // ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
// import { User } from "./User";

@ObjectType()
@Entity({ name: "posts" })
export class Post {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column({ length: 70 })
  title: string;

  @Field()
  @Column({ type: "text", length: "1000" })
  body: string;

  // @ManyToOne(() => User, (user) => user.posts)
  // creator: User;

  @Field()
  @Column({ type: "int", default: 0 })
  votes: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
