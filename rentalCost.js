function rental (car,day){

    if(car=="Economy")
    {
       let rent=4000*day;
       return rent ;
    }
    else if(car=="Midsize")
    {
        let rent=10000*day
        return rent ;
    }
    else if(car=="Luxury")
    {
        let rent=20000*day
        return rent ;
    }
}
let car="Economy"
let day=2;
let answer =rental(car,day);
console.log(answer) ;
