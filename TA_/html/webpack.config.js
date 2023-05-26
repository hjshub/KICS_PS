const path = require('path');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  // entry: './src/assets/js/common.js',
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  //   output: {
  //     //path: path.resolve(__dirname, 'dist/assets/js'),
  //     filename: 'bundle.js',
  //   },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
