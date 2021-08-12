const path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    // login: path.resolve(__dirname, '../dist/spop/login/login.html'),
    // screem: path.resolve(__dirname, '../dist/spop/screem/screem.html'),
    // screen: path.resolve(__dirname, '../dist/spop/screen/screen.html'),
    // screaz: path.resolve(__dirname, '../dist/spop/screen/screaz.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '/public',
    assetsPublicPath: '',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
  }
}
