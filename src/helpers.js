var mkdirp = require("mkdirp");
var fs = require("fs");
var getDirName = require("path").dirname;

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const writeFile = (path, contents, cb) => {
  mkdirp(getDirName(path), function (err) {
    if (err) return cb(err);
    fs.writeFile(path, contents, cb);
  });
};

module.exports = {
  capitalize,
  writeFile
};
