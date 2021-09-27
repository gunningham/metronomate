const HtmlWebpackPlugin = require('html-webpack-plugin')
const sharedConfig = require('./webpack.config.shared')

module.exports = {
  ...sharedConfig,
  plugins: [
    new HtmlWebpackPlugin({
      template: ('./index.html')
    })
  ],
  optimization: {
    minimize: false
  }
}
