const server = Bun.serve({
  port: Bun.env.PORT ?? 3000, // modify the port to Bun.env.PORT
  fetch() {
    return new Response("Bun on Zeabur!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
