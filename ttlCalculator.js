var requests = [
    {requestId: 't2',  startedAt: 1489744808, ttl: 8},
    {requestId: 't3',  startedAt: 1489744803, ttl: 3},
    {requestId: 't1', startedAt: 1489744806, ttl: 12}, 
    {requestId: 't4',  startedAt: 1489744810, ttl: 1}
]

// var requests = [
//     {requestId: 't2',  startedAt: 0, ttl: 5},
//     {requestId: 't3',  startedAt: 2, ttl: 1},
//     {requestId: 't1', startedAt: 4, ttl: 2}, 
//     {requestId: 't4',  startedAt: 6, ttl: 4}
// ]

// var requests = [
//     {requestId: 't2',  startedAt: 12, ttl: 1},
//     {requestId: 't3',  startedAt: 10, ttl: 5},
//     {requestId: 't1', startedAt: 14, ttl: 2}, 
//     {requestId: 't4',  startedAt: 18, ttl: 2},
//     {requestId: 't4',  startedAt: 0, ttl: 10}
// ]

var calculateTtl = (requests)=>{
    let earliestStart = requests[0].startedAt   //holds the earliest start time of a request
    let latestClose = 0                         //holds the latest close time of a request        
    requests.forEach((request)=>{
        //if this request started before the earliest starting request known yet
        if(request.startedAt < earliestStart){
            earliestStart = request.startedAt
        }
        //if this request ended after the latest ending request known yet        
        if(request.startedAt + request.ttl > latestClose){
            latestClose = request.startedAt + request.ttl
        }
    })
    var ttl = latestClose - earliestStart
    console.log(`Cumulative TTL: ${ttl}`)
}


// var calculateSpacedTtl = (requests)=>{
//     //sort the requests according to the request time
//     requests.sort((request1, request2)=>{
//         if(request1.startedAt < request2.startedAt){
//             return -1
//         } else if(request1.startedAt > request2.startedAt){
//             return 1
//         } else {
//             return 0
//         }
//     })
//     var ttl = 0     //the total ttl
//     var latestClose = requests[0].startedAt 
//     var earliestStart = requests[0].startedAt    
//     requests.forEach((request)=>{
//         // console.log('earliestStart', earliestStart)
//         // console.log('latestClose', latestClose)
//         var extendingTtl = false    //whether this request is adding to ttl 
//         var extendingTtlValue = 0   //amount by which this request is adding to ttl
//         var gap = 0                 //gap that this request has 
//         //if this request started before the earliest request recorded yet
//         if(request.startedAt < earliestStart){
//             // console.log('request startedAt is smaller than earliestStart')
//             extendingTtl = true
//             extendingTtlValue = earliestStart - request.startedAt
//             // console.log('extending ttl by value', extendingTtlValue)
//             //if this request ends before the earliest know request yet and hence there is a gap when no request is being server
//             if(request.startedAt + request.ttl < earliestStart){
//                 gap += (earliestStart - (request.startedAt + request.ttl))
//                 // console.log(`there is a gap of ${gap}`)
//             }
//             //set the earliest request known to this request's start time
//             earliestStart = request.startedAt
//         }
//         //if this request ended after the latest request end recorded yet        
//         if(request.startedAt + request.ttl > latestClose){
//             // console.log('request startedAt+ttl is greater than latestClose')
//             extendingTtl = true
//             extendingTtlValue = request.startedAt + request.ttl - latestClose 
//             // console.log('extending ttl by value', extendingTtlValue)
//             //if this request started after the latest know request yet and hence there is a gap when no request is being server            
//             if(request.startedAt > latestClose){
//                 gap += (request.startedAt - latestClose)
//                 // console.log(`there is a gap of ${gap}`)
//             }      
//             latestClose = request.startedAt + request.ttl
//         }
//         if(extendingTtl){
//             ttl += extendingTtlValue
//             ttl -= gap
//         }
//     })
//     console.log(`Cumulative TTl: ${ttl}`)
// }

calculateTtl(requests)