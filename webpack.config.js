const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env => {
  env = env || {};
  return {
      entry: './src/hello-world.js',
      output: {
          path: path.resolve(__dirname, "dist"),
      },
      plugins: [
          new HtmlWebpackPlugin()
      ]
  };
};
