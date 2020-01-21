const base = require('./webpack.base.config')
const webpack = require('webpack')
const dotenv = require('dotenv').config({})

module.exports = {
  ...base,
  plugins: [
    ...base.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_CONTENTFUL_SPACE: JSON.stringify(dotenv.parsed.REACT_APP_CONTENTFUL_SPACE),
        REACT_APP_CONTENTFUL_ACCESS_TOKEN: JSON.stringify(dotenv.parsed.REACT_APP_CONTENTFUL_ACCESS_TOKEN)
      }
    })
  ]
}
