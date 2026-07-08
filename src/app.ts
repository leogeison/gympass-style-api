import fastify from 'fastify';
import { appRouter } from './http/routes.js';

export const app = fastify();

app.register(appRouter);
