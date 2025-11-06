import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ApolloServer, HeaderMap } from '@apollo/server';
import type { Request, Response } from 'express';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers/index.js';
import { verifyToken } from './utils/auth.js';
import { trackVisitor } from './middlewares/visitor.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const server = new ApolloServer({ typeDefs, resolvers });

export const createApp = async () => {
    await server.start();

    app.all('/graphql', async (req: Request, res: Response) => {
        // Track visitor info
        await trackVisitor(req);
        const headers = new HeaderMap();
        for (const [key, value] of Object.entries(req.headers)) {
            if (Array.isArray(value)) headers.set(key, value.join(','));
            else if (typeof value === 'string') headers.set(key, value);
        }

        // extract token if present, but don't require it
        const authHeader = (req.headers.authorization as string) || '';
        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader || null;

        // optional: try to verify only if token exists
        let currentUser = null;
        if (token) {
            try {
                currentUser = await verifyToken(token);
            } catch {
                // ignore verification errors here — keep context null so login is allowed
                currentUser = null;
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
                req,
                res,
                token,
                currentUser,
            }),
        });

        for (const [name, value] of httpGraphQLResponse.headers) res.setHeader(name, value);
        res.statusCode = httpGraphQLResponse.status ?? 200;

        const { body } = httpGraphQLResponse;
        if (body.kind === 'complete') {
            res.end(body.string);
        } else {
            for await (const chunk of body.asyncIterator) res.write(chunk);
            res.end();
        }
    });

    return app;
};