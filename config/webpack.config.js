/**
 * @title: webpack.config.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: main webpack config file for the card application
 */
const path = require('path');

const dist = path.resolve(__dirname, '../dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlTemplatePath = './src/frontend/index.html';
const entryPoint = './src/frontend/index.jsx';
const favicon = './src/frontend/images/jLogo.ico';
module.exports = {
  entry: entryPoint,
  output: {
    filename: 'bundle.js',
    path: dist,
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: htmlTemplatePath,
      favicon
    })
  ],
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

  devServer: {
    static: dist,
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
