const path = require('path');

const dist = path.resolve(__dirname, './dist');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  output: {
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/i,
        type: 'asset'
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' }
          },
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
