const hq = 42
function distanceFromHqInBlocks (street) {
    return Math.abs(street - hq);
}


function distanceFromHqInFeet (street) {
   return distanceFromHqInBlocks(street) * 264
   
}

function distanceTravelledInFeet (start, destination) {
return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    const block = distanceTravelledInFeet(start, destination)
    if (block <= 400) {
     return 0
    }
    else if (block > 400 && block < 2000) {
        return 2.56
    } else if (block > 2500) {
       return 'cannot travel that far'
    } else if (block > 2000) {
        return 25
    }
}