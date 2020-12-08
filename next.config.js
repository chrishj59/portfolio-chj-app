const path = require("path");

module.exports = {
	// expose env variable to browser
	env: {
		AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
		BASE_URL: process.env.BASE_URL,
	},
};
