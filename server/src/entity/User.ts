import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
// import { Community } from "./Community";
// import { Post } from "./Post";

@ObjectType()
@Entity({ name: "users" })
export class User {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

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

  // @Field()
  // @OneToMany(()=> Post, (post) => post.creator)
  // posts: Post[];

  // @Field()
  // @OneToMany(()=> Community, (community) => community.creator)
  // myCommunities!: Community[];

  // @Field()
  // @ManyToOne(()=> Community, (community) => community.members)
  // communities!: Community[];

  @Column()
  password: string;
}
