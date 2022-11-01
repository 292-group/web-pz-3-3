const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require("webpack");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 3002,
    inline: true,
    contentBase: './',
    historyApiFallback: true,
    watchOptions: {
      ignored: /\/node_modules\/.*/
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // SERVER_API_URL: JSON.stringify("")
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
});


