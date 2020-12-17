import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import express from "express";
import { userResolver } from "./resolver/user";
import { User } from "./entity/User";
import { Post } from "./entity/Post";
import { Community } from "./entity/Community";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import cors from "cors";
import { __prod__, COOKIE_NAME } from "./constants";
import { communityResolver } from "./resolver/community";
import { postResolver } from "./resolver/post";

const PORT = 4000;

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "xplor",
    username: "postgres",
    password: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    entities: [User, Community, Post],
  });

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works in https
      },
      saveUninitialized: false,
      secret: "wrqwrqwarqwrqwarwaqrqwrqw",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [userResolver, communityResolver, postResolver],
      validate: false,
    }),
    //context is accesible by all resolvers
    context: ({ req, res }) => ({ req, res, redis }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(parseInt(process.env.PORT) || PORT, () => {
    console.log("Server running on port ", `http://localhost:4000/graphql`);
  });
};

main().catch((err) => {
  console.log(err);
});
