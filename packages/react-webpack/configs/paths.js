const { resolve } = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);
const resolvePackage = (relativePath) => resolve(appDirectory, `../${relativePath}`);

module.exports = {
  appPath: resolveApp('src'),
  publicPath: resolveApp('public'),
  buildPath: resolveApp('build'),

  /** Alias paths */
  componentsPath: resolveApp('src/components'),

  /** Packages paths */
  sharedPath: resolvePackage('shared/src'),
};
