var Promise = require('bluebird')
var sinon = require('sinon')
var request = require('request-promise')

var allResults = []
var allErrors = []

var failureTask = function(err){
    return function(){
        return request.get({
            url: 'htdasdtp://googdasle.dascom/'
        })
    }
}

var successTask = function(res){
    return function(){
        return request.get({
            url: 'http://localhost:9000/api/securityQuestions/'
        })
    }
}

var delay = function(time){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve()
        }, time)
    })
}

var retries = 3

var tasksArray = [
    failureTask(),
    successTask(),
    successTask(),
    failureTask(),
    successTask()
]

var doTasks = async function(){
    return tasksArray.forEach(async function(task){
        for(var i=1;i<=retries;i++){
            try {
                var result = await task()
                allResults.push(result)
                return
            } catch(err) {
                if(i == (retries)){
                    allErrors.push(err)
                    return
                } else {
                    console.log('tryng for the ', i, 'th time.')
                    console.log('task is')
                    console.log(task)
                    await delay(Math.pow(2, i))
                }
            }
        }
    })
}


var execute = async function(){
    await doTasks()
    console.log(allResults)
    console.log(allErrors)
}

console.log(execute())