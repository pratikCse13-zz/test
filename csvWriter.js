var fs = require('fs')

var x = [
    {
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 4
    },
    {
        a: 5,
        b: 6
    }
]

var line = ''
x.forEach(function(row){
    var comma = false
    Object.entries(row).forEach(([key, value])=>{
        if(comma){
            line += ','
        }
        comma = true
        line += value
    })
    line += '\n'
})
fs.writeFileSync(__dirname+'/example2.csv', line)