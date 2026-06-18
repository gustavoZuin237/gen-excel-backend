import { FastifyReply, FastifyRequest } from "fastify";

import { exportService } from "./export.service.js";

import { ExportSpreadsheetBody } from "../../shared/types/exportFileReqBody.js";

interface ExportSpreadsheetRequest {
  Body: ExportSpreadsheetBody;
}

export async function exportController(
  request: FastifyRequest<ExportSpreadsheetRequest>,
  reply: FastifyReply
) {
  const body = request.body;

  if (!body) {
    throw new Error("Falha na exportação")
  }

  let buffer;

  try {
    buffer = await exportService(body.fileName, body.rows);
  } catch {
    throw new Error("Falha na exportação")
  }

  reply
  .header(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  )
  .header(
    "Content-Disposition",
    `attachment; fileName="${body.fileName}.xlsx"`
  )
  .send(buffer);
}