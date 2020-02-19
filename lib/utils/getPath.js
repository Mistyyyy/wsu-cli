const path = require("path");
const startPath = process.cwd();

const join = filePath => {
  if (path.isAbsolute(filePath)) return filePath
  return path.join(startPath, filePath)
}

module.exports = {
  startPath,
  join
}