import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Post } from "./Post";
import { User } from "./User";
// import { Post } from "./Post";

@ObjectType()
@Entity({ name: "communities" })
export class Community extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ length: 10, unique: true })
  name: string;

  @Field()
  @Column({ length: 40 })
  title: string;

  @Field()
  @Column({ length: 250 })
  description: string;

  @Field()
  @Column({ type: "int", default: 1 })
  memberCount: number;

  @ManyToMany(() => User, (user) => user.subscribed)
  @JoinTable()
  members: User[];

  @OneToMany(() => Post, (post) => post.community)
  posts: Post[];

  // @Field()
  // @Column({ default: false })
  // favorite: boolean;
  // Not sure if this is what I need or should I have a Many to many relation

  @Field()
  @Column()
  ownerId: number;

  @Field(() => String)
  @UpdateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
