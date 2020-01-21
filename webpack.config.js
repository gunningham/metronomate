// require('dotenv').config()
const { NODE_ENV = 'production' } = process.env

module.exports = NODE_ENV === 'development'
  ? require('./webpack/webpack.development.config')
  : require('./webpack/webpack.production.config')
