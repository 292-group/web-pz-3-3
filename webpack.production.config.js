const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require('./webpack.config.js');
const {merge} = require('webpack-merge');



module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
});