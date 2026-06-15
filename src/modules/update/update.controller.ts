import type { FastifyReply, FastifyRequest } from "fastify";

import { UpdateSpreadsheetService } from "./update.service.js";
import { UpdateSpreadsheetDTO } from "./update.schema.js";

export class UpdateSpreadsheetController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    const result = await UpdateSpreadsheetService(
      request.body as UpdateSpreadsheetDTO,
    );

    return reply.status(200).send(result);
  }
}