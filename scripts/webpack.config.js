const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './'),
    libraryTarget: 'var',
    library: 'App',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: false,
    port: 9000,
  },
};
