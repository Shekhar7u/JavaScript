function printNumberDivisibleBy3Not2(numbers){
    numbers.forEach( function(element){
        if(element%2==0)
        {
            console.log(element);
        }
    })
}

const numbersArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
printNumberDivisibleBy3Not2(numbersArray);