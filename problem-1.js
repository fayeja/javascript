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
console.log(mindGame(33));
