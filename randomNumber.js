const randomGenerator =(()=>{
 const getRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
 }

    const randomNum=getRandomNumber(1,100)
    return randomNum
})();
console.log(randomGenerator);