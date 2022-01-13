import Hapi from "hapi";
import Company from "./api/company";
import NotFound from "./api/not-found";

const createServer = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 7843,
    host: process.env.HOST || "localhost",
  });

  await server.register([Company, NotFound]);

  return server;
};

export default createServer;
