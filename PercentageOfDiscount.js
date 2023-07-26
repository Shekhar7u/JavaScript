const calculatePercentageDiscount=(originalPrice,discountPrice)=>{
    const discountAmount=originalPrice-discountPrice
    const discountPercentage=((discountAmount/originalPrice)*100)
    return discountPercentage;

}

const originalPrice=200;
const discountPrice=17.90;
const percentageDiscount=calculatePercentageDiscount(originalPrice, discountPrice)

console.log(percentageDiscount);