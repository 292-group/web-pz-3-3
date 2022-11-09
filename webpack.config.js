const path =  require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const extract = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    entry: './app/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: extract.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    mode: 'development',
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
        new extract({
            filename: 'bundle.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
     
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        
    ]
       
}
