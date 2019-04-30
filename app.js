/*
	app.js is the main server file which acts as a point of aggregation for routes
*/
const express = require("express")

// env config
require("dotenv").config()

// logger
require("morgan")(process.env.NODE_ENV)

// express object instantiation
const app = express()

// taking care of cross origin resource sharing
app.use(require("cors")())

// including multiplexers
app.use("/overview", require("./routers/overview.js"))

// listen
app.listen(process.env.PORT || 3000, () => console.log("Serving ..."))
