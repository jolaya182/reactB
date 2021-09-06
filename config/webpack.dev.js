/**
 * @title: webpack.dev.js
 * @author: Javier Olaya
 * @date: 9/6/2021
 * @description: webpack development server configuration
 */
const path = require('path');

const dist = path.resolve(__dirname, '../dist');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'developement',
  devServer: {
    static: dist,
    historyApiFallback: true,
    hot: true
  },
  target: 'web',
  plugins: [
    new CleanWebpackPlugin()
    // new ReactRefreshWebpackPlugin()
  ]
});
