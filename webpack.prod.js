

const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    mode: "development",
    entry: "./app/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
      plugins: [new HtmlWebpackPlugin()],
      plugins: [new webpack.DefinePlugin({
        SERVICE_URL: JSON.stringify('https://dev.example.com'),
      })],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            },
            { test: /\.tsx?$/,
             loader: "ts-loader" },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "sass-loader",
                    "to-string-loader"
                ],
            },
         
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }

                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, 
                            disable: true, 
                        },
                    },
                ]
            },
            
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
              },


        ]
    }
}





