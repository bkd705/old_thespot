const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtools: 'cheap-module-source-map',
  entry: [
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: './api/public',
    filename: 'bundle.js',
    publicPath: './api/public'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [ 'babel' ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js' ]
  }
}
