let fns = {}

const planets = require("../models/planets.models")

fns.getAllPlanets = (req, res) => {
  return res.status(200).json(planets)
}


module.exports = fns