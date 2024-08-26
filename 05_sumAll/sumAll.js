const sumAll = function(argOne, arg) {
    
    let sum = 0;

    if (typeof(argOne) !== "number" || typeof(arg) !== "number" || 
    argOne<0 === true || Number.isInteger(arg) === false || arg<0 === true ||
    Number.isInteger(argOne) === false) {

        return "ERROR"
    } 

    if(argOne > arg === true) {

            for(let i = arg; i <= argOne; i++){

                sum+= i;

            }

        }
        
        else {
            
            for(let i = argOne; i <= arg; i++){

                sum+= i;

            }

        }
   
    return sum; 

}
  

// Do not edit below this line
module.exports = sumAll;
