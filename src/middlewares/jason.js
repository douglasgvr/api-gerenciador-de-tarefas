// src/middlewares/json.js
export async function json(req, res) {
  const buffers = [];

  req.on("data", (chunk) => {
    buffers.push(chunk);
  });

  return new Promise((resolve) => {
    req.on("end", () => {
      try {
        req.body = JSON.parse(Buffer.concat(buffers).toString());
      } catch (error) {
        req.body = null;
      }
      res.setHeader("Content-Type", "application/json");
      resolve();
    });
  });
}
