import { FastifyInstance } from "fastify";

import { importController } from "./import.controller.js";
import { importSchema } from "./import.schema.js";

export default async function importRoutes(app: FastifyInstance) {
  app.post("/", {
    schema: importSchema
  }, importController);
}