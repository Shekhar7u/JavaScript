const  claculateTotalCost=(cart)=>{
    let totalCost=0;
    for(const item of cart) {
        totalCost+=item.unitPrice*item.quantity;
    }
    return totalCost;//430
}
const cart=[
    {unitPrice:20,quantity:4},
    {unitPrice:70,quantity:2},
    {unitPrice:30,quantity:7}
];
const totalCost=claculateTotalCost(cart);
console.log(totalCost);

