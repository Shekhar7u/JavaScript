
function doubleItemQuantities(cart) {
    let correctedCart =[];
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of the current item and add it to the correctedCart array
        correctedCart.push(cart[i] * 2);
    }
    
    return correctedCart;
    
}


const cart = [1, 3, 45, 100]
const correctCart = doubleItemQuantities(cart)
console.log(correctCart);