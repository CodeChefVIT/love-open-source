/*
 * caller.js abstracts away building fetch options and fetch errors
 */
 
// buildOptions acts as an option builder
// pre and post org act as placeholders for building fetch URL
// url, along with required headers is passed through to return
module.exports.buildOptions = (preOrg, postOrg) => {
	let url = (postOrg != null)? `${process.env.GITHUB_API_URL}/${preOrg}/${process.env.GITHUB_ORG}/${postOrg}`:`${process.env.GITHUB_API_URL}/${preOrg}/${process.env.GITHUB_ORG}`
	return {
		url,
		headers: {
			"Accept": "application/vnd.github.v3+json",
			"User-Agent": "L04DB4L4NC3R"
		}
	}
}

// NoFetchErr abstracts away the error and message data structure
module.exports.NoFetchErr = (err) => {
	return {
					error: err, message:"error fetching from github"
	}
}
