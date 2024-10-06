// src/server.js
import http from "node:http";
import { routes } from "./routes.js";
import { json } from "./middlewares/jason.js"; // Corrigido para 'json.js'

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  // Chama o middleware para processar o corpo da requisição
  await json(req, res);

  // Procura a rota correspondente
  const route = routes.find((route) => {
    return route.method === method && route.path === url; // Corrigido de 'patch' para 'path'
  });

  if (route) {
    return route.handler(req, res);
  }

  // Se a rota não for encontrada
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Rota não encontrada");
});

// O servidor escuta na porta 8080
server.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});
