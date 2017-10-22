const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/index.jsx',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('styles.css'),
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          /*
          {
            test: /\.(bmp|gif|jpe?g|png)$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:base64:8].[ext]',
              fallback: 'file-loader'
            },
          },
          */
          {
            test: /\.(css|sass)$/,
            loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]',
                    camelCase: true,
                  }
                },
                {
                  loader: 'sass-loader'
                }
              ]
            })
          },
          {
            test: /\.(svg|png|jpg|gif|mov)$/,
            exclude: /\.(jsx?|html|json)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[hash:base64:8].[ext]',
                  publicPath: '/dist/',
                },
              }
            ]
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: [ ".js", ".jsx" ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
