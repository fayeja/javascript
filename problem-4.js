// Fourth Problem:
// findingBadData() function takes a array as input and any numbers will be in the array. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero),if any number is negative it will call "Bad Data",if a number is positive, it will call "Good Data". The function returns how many bad data are in the array.

function findingBadData(array) {
    if (Array.isArray(array) != true) {
        return "error!please input an array."
    }
    let totalBadData = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
        totalBadData += 1;
        }
    }
    return totalBadData;
}

let array = [9, -9, -5, -33, -55, 89, 98];
console.log(findingBadData(array));