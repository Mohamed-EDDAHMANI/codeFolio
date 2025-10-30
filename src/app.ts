import express from 'express';
import cors from 'cors';
import { ApolloServer, HeaderMap } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express';
import type { Request, Response } from 'express';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers/index.js';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(express.json());

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Wrap in async function to start Apollo
export const createApp = async () => {
  await server.start();

  app.use(morgan('dev'));

  app.all('/graphql', async (req: Request, res: Response) => {
    const headers = new HeaderMap();
    for (const [key, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) {
        headers.set(key, value.join(','));
      } else if (typeof value === 'string') {
        headers.set(key, value);
      }
    }

    const httpGraphQLResponse = await server.executeHTTPGraphQLRequest({
      httpGraphQLRequest: {
        method: req.method,
        headers,
        search: req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '',
        body: req.body,
      },
      context: async () => ({
        token: req.headers.authorization,
      }),
    });

    for (const [name, value] of httpGraphQLResponse.headers) {
      res.setHeader(name, value);
    }
    res.statusCode = httpGraphQLResponse.status ?? 200;

    const { body } = httpGraphQLResponse;
    if (body.kind === 'complete') {
      res.end(body.string);
    } else {
      for await (const chunk of body.asyncIterator) {
        res.write(chunk);
      }
      res.end();
    }
  });

  return app;
};