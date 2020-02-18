const path = require("path");
const startupPath = process.pwd();

const join = filePath => {
  if (path.isAbsolute(filePath)) return filePath
  return path.join(startPath, filePath)
}

module.exports = {
  startPath,
  join
}