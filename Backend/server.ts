import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import fastifyFormbody from "@fastify/formbody";

dotenv.config();

const app = Fastify();

async function initializeApp() {
  try {
    await app.register(fastifyCors);
    await app.register(fastifyFormbody);

    app.get("/hello", async (request, reply) => {
      return { message: "Hello from Fastify!" };
    });

    const port = Number(process.env.PORT) || 3000;
    await app.listen({ port });
    console.log(`Server listening on http://localhost:${port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

initializeApp();
