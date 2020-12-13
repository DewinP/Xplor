import { Field, ObjectType } from "type-graphql";
import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";
// import { User } from "./User";

@ObjectType()
@Entity({ name: "posts" })
export class Post {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ length: 70})
  title: string

  @Field()
  @Column({type: 'text', length:"1000"})
  body: string

  // @Field()
  // @ManyToOne(()=> User, (user) => user.posts)
  // creator: User;
  
  @Field()
  @Column({ type: "int", default: 0 })
  votes: number;
}
