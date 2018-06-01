/**
 * import npm modules
 */
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

/**
 * this function finds the biggest number among
 * the given set of numbers
 * @param numbers - the given set of numbers 
 */
var findBiggestNumber = (numbers)=>{
    var max = 0
    var maxIndex = 0
    numbers.forEach((number, index)=>{
        numbers[index] = parseInt(number)
        if(max < numbers[index]){
            maxIndex = index
            max = numbers[index]
        }
    })
    return {
        number: max,
        index: maxIndex
    }
}

/**
 * this function determines whether the provided set of sides form which type of polygon
 * @param sides - sides set
 * @param sets - results set
 */
var classifyPolygon = (sides, sets)=>{
    //find the biggest side
    var maxNumber = findBiggestNumber(sides)
    //verify whether the biggest side is smaller than the sum of all other sides
    //also determine whether it is a regular or irregular polygon    
    var sumOfSides = 0
    var irregular = false
    sides.forEach((side, index)=>{
        if(index != maxNumber.index){
            sumOfSides += (side)
        }
        if(!irregular && index >= 1){
            if(side != sides[index-1]){
                irregular = true
            }
        }
    })
    //if the largest side is equal or less than the sum of all other sides then it is not a polygon
    if((maxNumber.number) >= sumOfSides){
        sets.evrythingElse.push(sides)
        return
    }
    //if it is a quadrilateral then determine whether it is a square or a rectangle or not
    if(sides.length == 4){
        var typeOfQuadrilateral
        //if not irregular then it is a square
        if(!irregular){
            sets.squares.push(sides)
            return
        } else {
            //check if it is a rectangle
            var temp = []
            for(var i=0;i<sides.length;i++){
                var side = (sides[i])
                if(temp.length == 0){
                    temp.push(side)
                } else if(temp.length == 1){
                    if(temp[0] != side){
                        temp.push(side)
                    } else {
                        temp.splice(0,1)
                    }
                } else {
                    if(temp[0] != side && temp[1] != side){
                        sets.evrythingElse.push(sides)
                        return
                        break
                    } else {
                        if(temp[0] == side){
                            temp.splice(0,1)
                        } else {
                            temp.splice(1, 1)
                        }
                    }
                }
                if(i == (sides.length-1) && temp.length == 0){
                    sets.rectangles.push(sides)
                    return
                }
            }
        }
        if(!typeOfQuadrilateral){
            sets.evrythingElse.push(sides)
            return
        }
    }
    if(sides.length == 3){
        sets.triangles.push(sides)
        return
    } else {
        sets.evrythingElse.push(sides)
        return
    }
}

/**
 * read the file 'sides.txt' and gets the polygons
 */
fs.readFileAsync(__dirname+'/sides.txt', "utf-8")
    .then((data)=>{
        var sets = {
            triangles: [],
            rectangles: [],
            squares: [],
            evrythingElse: []
        }
        var polygons = data.split('\n')
        polygons.forEach((polygon)=>{
            var sidesArray = polygon.split(',')
            classifyPolygon(sidesArray, sets)
        })
        console.log(sets)
        return sets
    })

