const base = require('./webpack.base.config')
const webpack = require('webpack')
const dotenv = require('dotenv').config({})

module.exports = {
  ...base,
  plugins: [
    ...base.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        CONTENTFUL_SPACE: JSON.stringify(dotenv.parsed.CONTENTFUL_SPACE),
        CONTENTFUL_ACCESS_TOKEN: JSON.stringify(dotenv.parsed.CONTENTFUL_ACCESS_TOKEN)
      }
    })
  ]
}
