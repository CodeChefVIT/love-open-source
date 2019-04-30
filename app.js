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

// listen
app.listen(process.env.PORT || 3000, () => console.log("Serving ..."))
