module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,css,js,svg}'
	],
	
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^search(s)/
	],
	swDest: 'build/sw.js'
};