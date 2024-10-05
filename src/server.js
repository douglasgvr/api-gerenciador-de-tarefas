import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  res.end("Hello, World!\n");
});

server.listen(8080);
