const path = require("path");

const postCSSPlugins = [
	require("postcss-import"),
	require("postcss-simple-vars"),
	require("postcss-nested"),
	require("autoprefixer")
];

module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
		filename: "bundled.js",
		path: path.resolve(__dirname, "app")
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "app"),
		},
		hot: true,
		port: 3000
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader", // Inject CSS to page
					{
						loader: "css-loader", // Translates CSS into CommonJS modules
						options: {
							url: false
						}
					}, 
					{
						loader: "postcss-loader", // Run PostCSS actions
						options: {
							postcssOptions: {
								plugins: postCSSPlugins
							}
						}
					}
				]
			}
		]
	}
}