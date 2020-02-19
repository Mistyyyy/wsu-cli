const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { createPlugin } = require("../plugin/instancePlugin");
const baseConfig = require("./webpack.dev.config.js");

const DEFALUT_HOST = '0.0.0.0'
const DEFAULT_PORT = 3980

const prodConfig = {

  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },

  mode: "production",

  devtool: "cheap-source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
    ]
  },

  optimization: {
    minimize: true,
    noEmitOnErrors: true,
    runtimeChunk: {
      name: 'runtime',
    },
    namedModules: true,
    // namedChunks: true,
    moduleIds: 'named',
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    occurrenceOrder: true,
    providedExports: false,
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      name: false,
      automaticNamePrefix: 'general-prefix',
      automaticNameDelimiter: '-',
      automaticNameMaxLength: 100,
      minChunks: 3,
      minSize: 0,
      maxSize: 300000,
      cacheGroups: {
        common: {
          test: /[\\/](node_modules)[\\/]/,
          name: 'common',
          maxSize: 200_000,
          minSize: 0,
          chunks: 'all',
          filename: '[name].chunk.js',
          enforce: false,
        }
      }
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].[css]',
    })
    ....createPlugin("prod"),
  ]
}

const finnalConfig = merge(
  baseConfig,
  prodConfig
)