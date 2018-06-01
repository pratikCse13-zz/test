var _ = require('lodash')

var x = [{a: 1}, {a: 3},{b: 1}]

var temp = _.map(x, function(input){
    if(input.a){
        return input.a
    }
})

console.log(temp)