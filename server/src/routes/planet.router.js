const express = require("express")

const planetRouter = express.Router()

const { getAllPlanets } = require("../controllers/planets.controllers")

planetRouter.get("/planets", getAllPlanets)


module.exports = planetRouter