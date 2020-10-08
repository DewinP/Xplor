import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity({ name: "users" })
export class User {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ length: 15, unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({
    default: "https://www.flaticon.com/svg/static/icons/svg/3440/3440465.svg",
  })
  avatar: string;

  @Column()
  password: string;
}
