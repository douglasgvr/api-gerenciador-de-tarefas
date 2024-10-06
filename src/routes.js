const tarefas = [];
export const routes = [
  {
    method: "POST",
    patch: "/tarefas",
    handler: (req, res) => {
      tarefas.push({
        id: 1,
        title,
        description,
      });
    },
  },
  {
    method: "GET",
    patch: "/tarefas",
    handler: (req, res) => {
      return res
        .setHeader("Content-Type", "application/json")
        .end(JSON.stringify(tarefas));
    },
  },
];
