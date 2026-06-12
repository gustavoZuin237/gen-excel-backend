import { env } from "./env.js";
import { buildApp } from "./index.js";

const start = async () => {
  const app = await buildApp();

  await app.listen({
    port: env.PORT,
    host: "0.0.0.0"
  });

  console.log(`🚀 Server running at port ${env.PORT} 🚀`);
};

start();