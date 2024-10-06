const tarefas = [];
export const routes = [
  {
    method: "POST",
    path: "/tarefas",
    handler: (req, res) => {
      const { title, description } = req.body;

      if (title && description) {
        tarefas.push({
          id: tarefas.length + 1,
          title,
          description,
        });
        res.writeHead(201);
        return res.end(
          JSON.stringify({ message: "Tarefa criada com sucesso" })
        );
        // biome-ignore lint/style/noUselessElse: <explanation>
      } else {
        res.writeHead(400);
        return res.end(
          JSON.stringify({
            error: "Campos title e descriçao são obrigatórios",
          })
        );
      }
    },
  },

  {
    method: "GET",
    path: "/tarefas",
    handler: (req, res) => {
      return res.end(JSON.stringify(tarefas));
    },
  },
];
