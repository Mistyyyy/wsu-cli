const { join } = require("../../lib/utils/getPath");
const { createPlugin } = require("../plugin/instancePlugin");

const baseConfig = {
  context: process.cwd(),

  entry: './src/index.js',

  target: 'web',

  output: {
    path: './dist',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    hashDigestLength: 8,
  },

  moddule: {
    rules: [
      
      {
        test: /\.s[ac]ss$/,
        use: [
          'sass-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'less-loader',
        ]
      },
      {
        test: /\.stylus$/,
        use: [
          'stylus-loader'
        ]
      }
    ]
  },

  plugins: createPlugin("base"),
}
console.log(baseConfig)
module.exports = baseConfig