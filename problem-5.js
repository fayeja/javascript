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

console.log(gemsToDiamond(1, 1, 1));