import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Community } from "./Community";
import { Post } from "./Post";

@ObjectType()
@Entity({ name: "users" })
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ length: 10, unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({
    default: "https://www.flaticon.com/svg/static/icons/svg/3440/3440465.svg",
  })
  avatar: string;

  @ManyToMany(() => Community, (community) => community.members)
  subscribed: Community[];

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @Column()
  password: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
