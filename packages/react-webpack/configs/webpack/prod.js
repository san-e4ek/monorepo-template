// const Path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = require('../paths');
const baseHtmlConfig = require('../baseHtmlConfig');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    path: paths.buildPath,
    publicPath: 'auto',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin(baseHtmlConfig),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: Path.resolve(paths.publicPath, 'static') }],
    // }),
  ],
});
