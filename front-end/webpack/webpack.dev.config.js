const path = require('path');

const parentDir = path.join(__dirname, '../');

module.exports = {
  // define js entry point i.e. what will be loaded by our base template directly
  entry: [
    path.join(parentDir, 'index.jsx'),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader', // turn all .js and jsx files that are not in node_modules into the more compatible es5
    }, {
      test: /\.(css|scss|sass)$/,
      use: [
        {
          loader: 'style-loader', // creates style nodes from JS strings
        },
        {
          loader: 'css-loader', // translates CSS into CommonJS
        },
        {
          loader: 'sass-loader', // compiles Sass to CSS
        },
      ],
    },
    ],
  },
  // defines where all our js will be bundled for use by react
  output: {
    path: path.join(parentDir, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
  },
  node: {
    fs: 'empty',
    dgram: 'empty',
    net: 'empty',
    dns: 'empty',
  },
};
