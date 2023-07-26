function calculateTotalBill(dishCoasts,numberOfPeopleSharing)
{
    const totalBill =dishCoasts.reduce((acc,cost)=>acc+cost,0);
    const billPerPerson = parseInt(totalBill/numberOfPeopleSharing)
    const result={
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
    return result;
}
const dishCoasts = [28, 23, 75, 697]

const numberOfPeopleSharing = 9;
const billDetails = calculateTotalBill(dishCoasts, numberOfPeopleSharing)
console.log(billDetails)