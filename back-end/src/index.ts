import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import mongoose from 'mongoose';
import { authHeader } from './middlewares';
import { cors } from 'hono/cors';
import api from './api';

const app = new Hono();

async function connectToDatabase() {
    const databaseUrl: string =
        process.env.MONGODB_URI || 'mongodb://localhost:27017/hono';
    try {
        await mongoose.connect(databaseUrl);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

function configureServer() {
    const app = new Hono();

    // Middleware
    app.use('*', logger());
    app.use(authHeader);
    app.use(prettyJSON());

    // cors
    app.use(cors({ origin: '*' }));

    // Routes
    app.get('/', (c) => c.text('Hello Hono!'));
    app.route('/api/v1', api);

    // Error Handling
    app.notFound((c) => {
        return c.json({ error: `🔍 - Not Found - ${c.req.url}` }, 404);
    });

    app.onError((err, c) => {
        return c.json(
            {
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
            },
            500
        );
    });

    return app;
}

function startServer(app: Hono) {
    const port = 3000;
    console.log(`Server is running on port ${port}`);

    const server = serve({
        fetch: app.fetch,
        port,
    });
    // const server = serve(app, () => {
    //     console.log('Server is running on port 3000');
    // });
    return server;
}

async function start() {
    await connectToDatabase();
    const app = configureServer();
    startServer(app);
}

start();

app.get('/', (c) => {
    return c.text('Hello Hono!');
});
