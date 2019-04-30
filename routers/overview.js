/*
 * acts as a wrapper around overview fetches
 */

const mux = require("express").Router()
const request = require("request")
const {
	NoFetchErr,
	buildOptions
} = require("../model/caller.js")


// to get overview of the org, along with metadata
mux.get("/info", (req, res, next) => {
	request.get(buildOptions("orgs", null), (err, body, stat) => {
		if (err) {
			return res.status(200).json(NoFetchErr(err))
		}
		// used send instad of json because body.body is already a json encoded string
		res.status(200).send(body.body)
	})
})


// to get repository listing of the organization
// along with fetch links for repo details
mux.get("/repos", (req, res, next) => {
	request.get(buildOptions("orgs", "repos"), (err, body, stat) => {
		if (err) {
			return res.status(200).json(NoFetchErr(err))
		}
		// used send instad of json because body.body is already a json encoded string
		res.status(200).send(body.body)
	})
})


module.exports = mux
