// src/server.js
import http from "node:http";
import { routes } from "./routes.js";
import { json } from "./middlewares/jason.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(req, res);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Rota não encontrada");
});

server.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});
