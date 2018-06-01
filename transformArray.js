var x = [2,4,6,8,9,15]

/**
 * this function finds whether 
 * a number x is an exponential 
 * of a number y
 * @param x - the nu,ber which is supposed to be checked
 * @param y - base for exponential
 */
var exponentialsOf = (x,y)=>{
    let logValue = Math.log(x)/Math.log(y)
    return Number.isInteger(logValue)
}

/**
 * this function transforms the given array
 * @param input - the array to transform
 */
var transform = (input)=>{
    let results = []
    //find all numbers which are exponentials of two
    input = input.filter((elt)=>{
        return exponentialsOf(elt, 2)
    })
    //square all the numbers
    input.forEach((elt)=>{
        results.push(Math.pow(elt, 2).toString())
    })
    console.log(`Resulting Array:`)
    console.log(results)
}

transform(x)