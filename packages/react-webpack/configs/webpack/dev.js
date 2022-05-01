const { merge } = require('webpack-merge');

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseHtmlConfig = require('../baseHtmlConfig');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshPlugin(), new HtmlWebpackPlugin(baseHtmlConfig)],
});
