require('dotenv').config()
const { NODE_ENV = 'production', REACT_APP_CONTENTFUL_SPACE } = process.env

console.log('----------REACT_APP_CONTENTFUL_SPACE------------')
console.log(REACT_APP_CONTENTFUL_SPACE)

module.exports = NODE_ENV === 'development'
  ? require('./webpack/webpack.development.config')
  : require('./webpack/webpack.production.config')
