const Path = require('path');

const paths = require('../paths');

module.exports = {
  entry: Path.resolve(paths.appPath, 'index.tsx'),

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@components': paths.componentsPath,
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: [paths.appPath, paths.sharedPath],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react', { runtime: 'automatic' }],
                ['@babel/preset-typescript'],
                ['@babel/preset-env'],
              ],
              plugins: [
                ['@babel/plugin-transform-flow-strip-types'],
                ['@babel/plugin-proposal-class-properties'],
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff2|woff|ttf|eot|png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        use: [{ loader: 'file-loader?name=static/media/[name].[hash].[ext]' }],
      },
    ],
  },
};
