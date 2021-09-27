const path = require('path')

module.exports = {
  entry: './src',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@resources': path.resolve(__dirname, 'src/resources/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@actions': path.resolve(__dirname, 'src/actions/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
  performance: {
    hints: false
  }
}
