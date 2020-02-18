const path = require("path");
const { join } = require("../../lib/utils/getPath");

module.exports = {
  context: process.pwd(),

  entry: './src/index.js',

  output: {
    path: './dist',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    hashDigestLength: 8,
  },

  moddule: {

  },

  plugins: [

  ],

  resolve: {

  }
}