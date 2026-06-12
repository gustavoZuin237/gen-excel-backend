import { FastifyReply, FastifyRequest } from "fastify";

import { importService } from "./import.service.js";

export async function importController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const file = await request.file();

  if (!file) {
    return reply.status(400).send({
      error: "No file provided",
    });
  }

  const rows = await importService(file);

  return reply.send(rows);
}