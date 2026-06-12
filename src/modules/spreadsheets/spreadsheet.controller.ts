import { FastifyReply, FastifyRequest } from "fastify";

export async function createSpreadsheet(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return reply.send({
    message: "Create spreadsheet"
  });
}

export async function getSpreadsheet(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return reply.send({
    message: "Get spreadsheet"
  });
}

export async function updateSpreadsheet(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return reply.send({
    message: "Update spreadsheet"
  });
}

export async function mergeSpreadsheets(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return reply.send({
    message: "Merge spreadsheets"
  });
}