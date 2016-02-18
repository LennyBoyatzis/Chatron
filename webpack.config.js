'use strict'

const webpack = require('webpack')
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer')
const path = require('path')

const config = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './app/index'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /^((?!\.module).)*\.css$/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap'
      ]
    }, {
      test: /\.module\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!'
      ]
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publichPath: 'http://localhost:3000/dist/'
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  target:
}

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
