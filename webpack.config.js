var webpack = require('webpack');

var environments = {
  development: {
    context: __dirname + '/app',

    entry: {
      javascript: './app.js',
      html: './index.html'
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
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

    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    }
  },

  production: {
    context: __dirname + '/app',
    entry: {
      javascript: './app.js',
      html: './index.html',
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel?presets[]=react,presets[]=es2015'],
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
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
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],

    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    }
  }
}

module.exports = environments[process.env.NODE_ENV] || environments.development;
