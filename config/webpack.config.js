const path = require('path');

const dist = path.resolve(__dirname, '../dist');
module.exports = {
  mode: 'development',
  devServer: {
    static: dist,
    historyApiFallback: true
  }
};
