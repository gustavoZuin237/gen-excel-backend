import type { FastifyInstance } from "fastify";

import { UpdateSpreadsheetController } from "./update.controller.js";

export default async function updateRoutes(
  app: FastifyInstance,
) {
  app.post("/", async (request, reply) => {
    const controller = new UpdateSpreadsheetController();

    return controller.handle(request, reply);
  });
}