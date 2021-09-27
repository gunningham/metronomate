const sharedConfig = require('./webpack.config.shared')

module.exports = {
  ...sharedConfig,
  optimization: {
    usedExports: true,
    minimize: true
  }
}
