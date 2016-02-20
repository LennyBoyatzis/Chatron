'use strict'

const path = require('path')
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer')
const webpack = require('webpack')

const config = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    path.resolve(__dirname, 'app/app.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/public/'
  },
  module: {
      loaders: [
          { test: /\.jsx?$/,
            loader: 'react-hot',
            exclude: /node_modules/
          },
          {
              test: /\.jsx?$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
          },
          {
              test: /\.less$/,
              loader: 'style!css!less'
          },
          {
              test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
              loader : 'url?prefix=font/&limit=10000'
          },
          {
              test: /.*\.(gif|png|svg)$/i,
              loaders: [
                  'file?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
              ]
          },
          {
              test: /\.(jpg)$/,
              loader: 'url?limit=25000'
          }
      ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
          "process.env": {
          "NODE_ENV": JSON.stringify("development")
          }
      })
  ],
  resolve: {
      extensions: ['', '.js', '.jsx', '.json', '.coffee']
  }
}

config.target = webpackTargetElectronRenderer(config)

module.exports = config
