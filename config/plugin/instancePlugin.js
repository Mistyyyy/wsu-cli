const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const DuplicateWebpackPlugin = require("duplicate-package-checker-webpack-plugin");

function createPlugin(env) {
  if (env === 'base') {
    return instancePlugin(
      htmlWebpackPlugin,
      DuplicateWebpackPlugin
    )
  }
  if (env === 'dev') {
    return instancePlugin(
      HardSourceWebpackPlugin,
    )
  }

  if (env === 'prod') return instancePlugin(
    OptimizeCssAssetsWebpackPlugin,
    CleanWebpackPlugin,
  )
}

function instancePlugin(...constructors) {
  return constructors.map(Constructor => new Constructor())
}

module.exports = {
  createPlugin
}