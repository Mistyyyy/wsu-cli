const merge = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const openBrowser = require('../devServer/openBrowser');
const { createPlugin } = require("../plugin/instancePlugin");

const baseConfig = require("./webpack.dev.config.js");

const DEFALUT_HOST = '0.0.0.0'
const DEFAULT_PORT = 3980

const devConfig = {

  output: {
    path: './development',
  },

  mode: "development",

  debtools: "eval",

  module: {
    rules: [
      {
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
      }
    ]
  } 

  devServer: {
    compress: true, // 开启 gzip 压缩
    host: DEFALUT_HOST,
    port: DEFAULT_PORT,
    open: true,
    // openPage: '/', // 可以是字符串，也可以是数组
    disableHostCheck: true,
    hot: true,
    // hotOnly: true,
    historyApiFallback: true, // 如果请求的脚本文件是相对路径，就会报错，因为脚本文件找不到
    overlay: {
      warnings: true, // 输出警告
      errors: true, // 输出编译错误
    },
    index: 'index.html',
    serveIndex: true,
    after: () => {
      openBrowser();
    },
  },

  plugins: [
    ...createPlugin("dev"),
    new FriendlyErrorsWebpackPlugin(
      { 
        compilationSuccessInfo: {
          messages: [`You application is running here http://${DEFALUT_HOST}:${DEFAULT_PORT}`],
        }
      }
    )
  ]
}

const finnalConfig = merge(
  baseConfig,
  devConfig
)