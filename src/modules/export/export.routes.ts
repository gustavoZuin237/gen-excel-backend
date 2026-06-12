import { FastifyInstance } from "fastify";

import { exportController } from "./export.controller.js";
import { exportSchema } from "./export.schema.js";

export default async function exportRoutes(app: FastifyInstance) {
  app.post("/", {
    schema: exportSchema
  }, exportController);
}