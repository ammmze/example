module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	assetsDir: ['assets1', 'assets2'],
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
				},
			],
		},
	},
};
