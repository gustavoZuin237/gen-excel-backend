import Fastify from "fastify";

import multipart from "@fastify/multipart";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

import exportRoutes from "./modules/export/export.routes.js";
import importRoutes from "./modules/import/import.routes.js";

const FRONTEND_URL = process.env.FRONTEND_URL;

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

  await app.register(swagger, {
    openapi: {
      info: {
        title: "Gen Excel API",
        description: "API for importing and exporting spreadsheets",
        version: "1.0.0",
      },
    },
  });

  await app.register(swaggerUi, {
    routePrefix: "/docs",
  });

  app.register(importRoutes, {
    prefix: "/spreadsheets/import",
  });

  app.register(exportRoutes, {
    prefix: "/spreadsheets/export",
  });

  return app;
}
