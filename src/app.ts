import fastify from 'fastify';

export const app = fastify();
import { prisma } from '@/lib/prisma.js';

prisma.user.create({
  data: {
    name: 'Leo',
    email: 'leogeisom@gmail.com'
  }
});
