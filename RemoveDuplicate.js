// Sample item object
const item1 = {
    productId: 1,
    name: "Item 1",
    price: 10.99
  };
  
  // Sample cart array
  let cart = [];
  
  // Function to check if an item already exists in the cart
  function isItemInCart(productId) {
    return cart.some(item => item.productId === productId);
  }
  
  // Function to add an item to the cart
  function addItemToCart(item) {
    // Check if the item already exists in the cart
    if (isItemInCart(item.productId)) {
      console.log("Item already exists in the cart.");
      return;
    }
  
    // Add the item to the cart
    cart.push(item);
    console.log("Item added to the cart.");
  }
  
  // Function to remove duplicates from the cart
  function removeDuplicatesFromCart() {
    cart = cart.filter((item, index, self) =>
      index === self.findIndex(t => t.productId === item.productId)
    );
    console.log("Duplicates removed from the cart.");
  }
  
  // Add items to the cart
  addItemToCart(item1);
  addItemToCart(item1); // This will be considered a duplicate
  
  console.log("Cart:", cart);
  
  // Remove duplicates from the cart
  removeDuplicatesFromCart();
  
  console.log("Cart after removing duplicates:", cart);
  