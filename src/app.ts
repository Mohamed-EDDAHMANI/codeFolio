import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express';
import type { Request } from 'express';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers/index.js';

const app = express();
app.use(cors());
app.use(express.json());

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Wrap in async function to start Apollo
export const createApp = async () => {
  await server.start();

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req }: { req: Request }) => ({
        token: req.headers.authorization,
      }),
    })
  );

  return app;
};