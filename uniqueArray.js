var arr = [4,2,2,4,5]
//no of elts
var n = arr[0]
arr.splice(0,1)
//hash
var hash = {}
//non unique arr
var nonUniq = []
//sum
var sum = 0
//create hash and sum
for(var i=0;i<n;i++){
    var current = arr[i]
    if(hash[current]){
        nonUniq.push(current)
    } else {
        hash[current] = 1
    }
    sum += current
}
for(var i=0;i<nonUniq;i++){
    var current = nonUniq[i]
    while(hash[current]){
        current++
        sum++
    }
    hash[current] = 1
}
return sum