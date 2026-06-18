import Fastify from "fastify";

import multipart from "@fastify/multipart";
import cors from "@fastify/cors";

import exportRoutes from "./modules/export/export.routes.js"
import importRoutes from "./modules/import/import.routes.js"

const FRONTEND_URL = process.env.FRONTEND_URL

if (!FRONTEND_URL) {
  throw new Error("FRONTEND_URL is not defined");
}

export async function buildApp() {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: FRONTEND_URL,
    credentials: true,
  });

  await app.register(multipart);

  app.register(importRoutes, {
    prefix: "/spreadsheets/import",
  });

  app.register(exportRoutes, {
    prefix: "/spreadsheets/export",
  });

  return app;
}
