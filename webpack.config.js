const path = require('path');

const dist = path.resolve(__dirname, './dist');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
    // new ReactRefreshWebpackPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    static: dist,
    historyApiFallback: true,
    hot: true
  },
  target: 'browserslist',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
