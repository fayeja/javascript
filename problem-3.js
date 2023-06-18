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
console.log(isLGSeven(6));