const Path = require('path');
const paths = require('./paths');

module.exports = {
  filename: 'index.html',
  title: 'template',
  template: Path.resolve(paths.publicPath, 'index.html'),
  // appleTouchIcon: Path.resolve(paths.publicPath, 'apple-icon.png'),
  // favicon: Path.resolve(paths.publicPath, 'favicon.ico'),
  // manifest: Path.resolve(paths.publicPath, 'manifest.json'),
};
