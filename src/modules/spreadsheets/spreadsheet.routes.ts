import { FastifyInstance } from "fastify";

import {
  createSpreadsheet,
  getSpreadsheet,
  updateSpreadsheet,
  mergeSpreadsheets,
} from "./spreadsheet.controller.js";

import { createSpreadsheetSchema } from "./spreadsheet.schema.js";

export default async function spreadsheetRoutes(app: FastifyInstance) {
  // General routes

  // POST - Create spreasheet
  app.post("/", { schema: createSpreadsheetSchema }, createSpreadsheet);

  // GET - Read all spreasheets
  app.get("/", getSpreadsheet);

  // GET - Read specific spreasheet by ID
  app.get("/:id", getSpreadsheet);

  // PUT - Update specific spreasheet by ID
  app.put("/:id", updateSpreadsheet);

  // POST - Merge spreadsheets
  app.post("/merge", mergeSpreadsheets);
}
