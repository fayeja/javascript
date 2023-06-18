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

console.log(evenOdd('om'));