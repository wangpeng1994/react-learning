const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactDemo',
      filename: 'ReactDemo.html',
      template: './app/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './build',
    inline: true, //设置为true，当源文件改变时会自动刷新页面
    port: 3003, //设置默认监听端口，如果省略，默认为"8080"
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: [
          'node_modules'
        ],
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: false,
            attrs: false
          }
        }
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        use:[
          "file-loader"
        ]
      }
    ]
  }
  
}