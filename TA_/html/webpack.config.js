const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode,
  // entry: './src/assets/js/common.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
  },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/ui.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
