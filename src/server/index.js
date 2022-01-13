import Hapi from "hapi";
import Company from "./routes/company";
import NotFound from "./routes/not-found";

const createServer = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 7843,
    host: process.env.HOST || "localhost",
    routes: { cors: { origin: ["*"] } },
  });

  await server.register([Company, NotFound]);

  return server;
};

export default createServer;
