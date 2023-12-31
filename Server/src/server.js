const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./model/planets.model");

const PORT = 8000;
const server = http.createServer(app);
async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
  });
}
startServer();
