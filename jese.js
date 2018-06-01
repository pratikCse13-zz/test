var time = 0
var p =0
var tickets = [4,2,4]
for(var i=0;i<tickets.length;i++){
if(i<p){
    if(tickets[i]<tickets[p]){
        console.log(1)
        time += tickets[i]
    } else {
        console.log(2)
        time += tickets[p]
    }
} else if(i == p){
    console.log(3)
    console.log(tickets[p])
    time += tickets[p]
} else if(i > p){
    if(tickets[i]>=tickets[p]){
        console.log(4)
        var temp = tickets[p] - 1
        if(temp < 0){
            temp = 0
        }
        console.log(temp)
        time += temp
    } else {
        console.log(5)
        console.log(tickets[p])
        time += tickets[i]
    }
}
}
console.log(time)