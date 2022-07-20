const http = require("http")
const app = require("./app")
const { loadData } = require("./models/planets.models")
const PORT = process.env.PORT || 8000
async function load() {
  // code goes here
  await loadData()
};
load()
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log("the port has started at ", PORT)
})