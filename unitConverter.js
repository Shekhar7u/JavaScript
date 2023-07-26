function convert (celsius){
    let fehrenheit= (celsius*1.8000)+32.00;
    return fehrenheit;

}
let celsius = 35;
let answer=convert(celsius);
console.log(answer);