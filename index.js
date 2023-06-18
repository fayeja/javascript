// First Problem:
// The mindGame() function takes a number as input,multiplies it by 3,
// adds 10 and divides the result by 2,then subtracts 2 from the result and returns the output.

function mindGame(number){
    if(typeof(number)!='number' || number<0){
        return "error!please input a positive number."
    }
        let result=(((number*3)+10)/2)-5;
        result=result.toFixed(1);
        result=parseFloat(result);
        return result;
}

// Second Problem:
// The function evenOdd() takes a string as input. Based on the total number of characters in the string, the output should be provided. Depending on the total amount of characters in the string, the output will either be "even" or "odd."

function evenOdd(string){
    if(typeof(string)!='string'){
        return "error!please input a string."
    }
        if (string.length%2==0) {
            return "even";
         }
         else{
           return "odd";
         }
}

// Third Problem:
// The function isLGSeven() takes a number as input. The difference between the input value and 7 should be calculated. Return the subtraction if this difference is less than 7. If not, return the input's double value that means twice the input number.

function isLGSeven(value) {
    if (typeof (value) != 'number') {
        return "error!please input a number."
    }
    let Difference = value - 7;
    if (Difference < 7) {
        return Difference;
    }
    else
        return value * 2;
}

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

// Fifth Problem:
// gemsToDiamond() function takes three numbers(Number of gems of 3 friends) as input and power of gems( three friends ) are also given.Gems capacity means how many diamonds a gem can be converted into. The function figure out how many diamonds in total by combining the gems of all  friends. If the number of total diamond is over 2000 then it will get as many diamonds as are left after subtracting 2000 from total diamond.

function gemsToDiamond(num1, num2, num3) {
    if (typeof (num1) != 'number' || typeof (num2) != 'number' || typeof (num3) != 'number') {
        return "error!please input three number."
    }
    let totalDiamond = num1 * 21 + num2 * 32 + num3 * 43;
    if (totalDiamond > 2000) {
        return totalDiamond - 2000;
    }
    else
        return totalDiamond;

}