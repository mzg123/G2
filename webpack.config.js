var path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new MinifyPlugin(),
  ]
};
