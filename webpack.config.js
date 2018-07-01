var path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath:"./dist/",
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js|jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
                loader: 'jsx-loader',
          }
        },
        {
          test: /\.js|jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react','@babel/preset-env'],
                  plugins: ['@babel/plugin-proposal-class-properties',
                            //'@babel/plugin-syntax-dynamic-import'
                           ]
                }
          }
        },
      ]
    },
    plugins: [
      new MinifyPlugin(),
    ],
optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 1
                }
            }
        }
    },
};
