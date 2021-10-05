const CracoAlias = require("craco-alias");
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@resources': path.resolve(__dirname, 'src/resources/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
    },
  },
  plugins: [
    {
       plugin: CracoAlias,
       options: {
          source: "tsconfig",
          baseUrl: "./src",
          tsConfigPath: "./tsconfig.paths.json"
       }
    }
 ]
};