/* eslint import/no-extraneous-dependencies: "off" */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      tpl: path.resolve(__dirname, 'js/'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
});
