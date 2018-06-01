const https = require('https')
const _ = require('lodash')
const request = require('request')
Promise.promisifyAll(request)
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */

function httpGetRequest(url){
    return new Promise(function(resolve, reject){
        var data
        https.get(url, function(res){
            res.on('data', (d) => {
                data += d
            });
            res.on('end', (d) => {
                data += d
                return resolve(data)
            });
        })
    })
}

async function getMovieTitles(substr) {
    var page = 1
    var maxPages
    var allResults = []
    do{
        try {
            var result = await request('https://jsonmock.hackerrank.com/api/movies/search/?Title='+substr+'&page='+page)
        } catch(err) {
            console.log(err)
        }
        maxPages = result.total_pages
        result.data.forEach(function(input){
            var index = _.sortedIndex(allResults, input.Title)
            allResults.splice(index, 0, input.Title)
        })
    } while(page<=maxPages)
    return allResults
}

getMovieTitles('spiderman')

