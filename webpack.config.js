const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: ["@babel/polyfill", "./app/index.ts"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index-bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|less)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]',
              context: 'app'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "to-string-loader"],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'url-loader?name=./fonts/[name].[ext]'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};
