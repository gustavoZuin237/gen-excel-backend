import Fastify from "fastify";

import multipart from "@fastify/multipart";
import cors from "@fastify/cors";

import spreadsheetRoutes from "./modules/spreadsheets/spreadsheet.routes.js";
import exportRoutes from "./modules/export/export.routes.js"
import importRoutes from "./modules/import/import.routes.js"

export async function buildApp() {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: "http://localhost:5173", // TODO Use a .env variable for the frontend URL
  });

  await app.register(multipart);
  
  app.register(spreadsheetRoutes, {
    prefix: "/spreadsheets",
  });

  app.register(importRoutes, {
    prefix: "/spreadsheets/import",
  });

  app.register(exportRoutes, {
    prefix: "/spreadsheets/export",
  });

  return app;
}
