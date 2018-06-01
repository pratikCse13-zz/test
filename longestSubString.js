var longestStartIndex = 0
var currentStartIndex = 0
var longestEndIndex = 0
var currentEndIndex = 0
var longestSubString = ''
var input = process.argv[2]
var currentSubString = ''
var currentLength = 1
console.log(input.length)
for(var i=1;i<input.length;i++){
    console.log('------------')
    console.log('currentStartIndex')
    console.log(currentStartIndex)
    console.log('currentEndIndex')
    console.log(currentEndIndex)
    //check if the current i elt is present in current start index and current end index
    currentSubString = input.substring(currentStartIndex, currentEndIndex+1)
    console.log('currentSubString')
    console.log(currentSubString)
    console.log('longestSubString')
    console.log(longestSubString)
    if(currentSubString.indexOf(input[i]) != -1){
        console.log('present')
        //yes
        //check if the current length is more than the longest string yet
        currentLength = currentEndIndex - currentStartIndex + 1
        console.log('currentLength')
        console.log(currentLength)
        if(currentLength > longestSubString.length){
            console.log('length bigger')
            //yes
            //set all current to the longest
            longestStartIndex = currentStartIndex
            longestEndIndex = currentEndIndex
            longestSubString = input.substring(currentStartIndex, currentEndIndex+1)
            currentStartIndex = i
            currentEndIndex = i
        } else {
            console.log('smaller')
            //no
            //set current start at i and current end at i
            currentStartIndex = i
            currentEndIndex = i
        }
    } else {
        console.log('not present')
        //no
        //set current end at i
        currentEndIndex = i
        currentLength = currentEndIndex - currentStartIndex + 1
        console.log('currentLength')
        console.log(currentLength)
        if(currentLength > longestSubString.length){
            console.log('length bigger')
            //yes
            //set all current to the longest
            longestStartIndex = currentStartIndex
            longestEndIndex = currentEndIndex
            longestSubString = input.substring(currentStartIndex, currentEndIndex+1)
        }
    }
    console.log('longestSubString')
    console.log(longestSubString)
}

console.log(longestStartIndex)
console.log(longestEndIndex)
console.log(longestSubString)