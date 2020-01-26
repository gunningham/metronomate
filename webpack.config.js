const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src',
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
            loader: 'sass-loader',
            options: {
              data: '@import "src/resources/sass/main.scss";',
              includePaths: [__dirname, 'src']
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ('./index.html')
    })
  ]
}
