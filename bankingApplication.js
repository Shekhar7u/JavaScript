const customerAccount={
    name:"Shashi Shekhar",
    balance:10000,
}

const deposit=(amount)=>{
    if(amount<=0)
    {
        console.log("Invalid amount");
    }
    else{
        customerAccount.balance += amount;
        console.log(`Successfully deposited $${amount}, new balance{customerAccount.balance}`);
    }
};
const withdraw=(amount)=>{
 if(amount<=0)
 {
    console.log("Invalid amount");
 }
 else if(amount>customerAccount.balance){
console.log("Insufficient funds")
 }
 else{
    customerAccount.balance -= amount;
    console.log(`Successfully withdraw $${amount}  new balance $${customerAccount.balance}`);
 }
}
deposit(2940)
withdraw(634)
console.log(customerAccount.balance);