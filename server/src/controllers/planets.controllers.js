let fns = {}

const planets = require("../models/planets.models")
console.log("the app planets is called")
fns.getAllPlanets = (req, res) => {
  console.log("the get all planets called******")
  return res.status(200).json(planets)
}


module.exports = fns