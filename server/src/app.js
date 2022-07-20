const express = require("express")
const cors = require("cors")

const planetRouter = require("./routes/planet.router")

const app = express()
app.use(express.json())
app.use(cors())
app.use(planetRouter)
app.use("hello", (req, res) => { return res.send("hello") })
module.exports = app
