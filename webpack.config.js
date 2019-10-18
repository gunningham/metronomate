const webpack = require('webpack')
const dotenv = require('dotenv').config({})

module.exports = {
  entry: './src/app',
  output: {
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CONTENTFUL_SPACE: JSON.stringify(dotenv.parsed.CONTENTFUL_SPACE),
        CONTENTFUL_ACCESS_TOKEN: JSON.stringify(dotenv.parsed.CONTENTFUL_ACCESS_TOKEN)
      }
    })
  ]
}
