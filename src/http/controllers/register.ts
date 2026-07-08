import z from 'zod';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { RegisterUseCase } from '@/use-cases/register.js';
import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository.js';

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const requestBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  });

  const { name, email, password } = requestBodySchema.parse(request.body);

  try {
    const userRepository = new PrismaUserRepository();
    const registerUseCase = new RegisterUseCase(userRepository);

    await registerUseCase.execute({
      name,
      email,
      password
    });
  } catch (error) {
    return reply.status(409).send();
  }

  return reply.status(201).send();
}
