function validatePassword(password,confirmPassword){
    if(password==confirmPassword)
    {
        console.log("Password Matched");
    }
    else{
        console.log("Password did not match");
    }
}
let password="asdfgh"
let confirmPassword="skjhdksh"

validatePassword(password,confirmPassword)
