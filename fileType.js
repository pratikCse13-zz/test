var fileType = require('file-type')
var fs = require('fs')

console.log(fileType(fs.readFileSync(__dirname+'/read.csv')))
