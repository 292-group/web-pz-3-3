const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.config.js');
const {merge} = require('webpack-merge');
const webpack = require("webpack");


module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      parallel: true,
      extractComments: true,
      terserOptions: {
        ecma: 5,
        ie8: false,
        safari10: true,
        compress: true,
        warnings: true,
      },
    })],
  }
});