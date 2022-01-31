const { merge } = require('webpack-merge');
//const OptimizeCSSAssetsPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({}),
      //new OptimizeCSSAssetsPlugin({}),
      '...',
    ],
  },
});
