const base = require('./webpack.base.config')
const webpack = require('webpack')

module.exports = {
  ...base,
  plugins: [
    ...base.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_CONTENTFUL_SPACE: process.env.REACT_APP_CONTENTFUL_SPACE,
        REACT_APP_CONTENTFUL_ACCESS_TOKEN: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
      }
    })
  ]
}
