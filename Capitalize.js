let name="shekhar singh"
let count=[...name].length

let capitalizeUserName=captalizeName(name)
console.log(capitalizeUserName) //Shekar singh

function captalizeName(name)
{
    let FirstLetter=name.charAt(0).toUpperCase()
    let fullname= name.slice(1,count+1)
    return FirstLetter+fullname
}