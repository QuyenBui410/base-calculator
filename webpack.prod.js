/* eslint import/no-extraneous-dependencies: "off" */
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [],
});