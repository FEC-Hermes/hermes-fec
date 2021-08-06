var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif)$/i, use: 'url-loader',},
      {
        test: /\.(js|jsx|css)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              ['@babel/plugin-transform-runtime',
                {
                  'regenerator': true
                }
              ]
            ]
          }
        },
      }
    ]
  }
};


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: {
//     app: './src/index.js',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Production',
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
// };