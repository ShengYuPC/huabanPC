// 不可使用es6模块化引入
/*import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextWebpackPlugin from "extract-text-webpack-plugin";*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry : './src/main.js',
	output : {
		path : __dirname + '/build',
		filename : 'app.js'
	},
	devServer : {
		contentBase : './build',
		port : 9000,
		host : 'localhost',
		historyApiFallback : false
	},
	plugins : [
		new HtmlWebpackPlugin({
			filename : 'index.html',
			template : './src/index.html'
		}),
		new ExtractTextWebpackPlugin({
			filename : 'app.css',
			allChunks : true
		})
	],
	module : {
		loaders : [
			{
				test : /\.s[c|a]ss$/,
				loader : ExtractTextWebpackPlugin.extract({
					fallback : 'style-loader',
					use : 'css-loader!sass-loader'
				})
			},
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : 'babel-loader',
				query : {
					presets : ['es2015','react']
				}
			}
		]
	}
}