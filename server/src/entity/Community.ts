import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";
import { User } from "./User";
// import { Post } from "./Post";

@ObjectType()
@Entity({ name: "communities" })
export class Community extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

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

  @ManyToOne(() => User, (user) => user.ownedCommunities)
  owner: User;

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
