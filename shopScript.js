// Script for a shopping cart exercise I'm creating
console.log("SHOPPING CART PROJECT!!!") ;

// Removes cart items when the 'remove' button is pressed
const removeCartItemBtns = document.getElementsByClassName('remv-btn') ;
for (i = 0; i < removeCartItemBtns.length; i++) {
    const button = removeCartItemBtns[i] 
    button.addEventListener('click', removeCartItem = (event) => {
        const buttonClicked = event.target ;
        buttonClicked.parentElement.remove() ;
        updateCartTotal();
    })
} ;

// Updates the 'Total' of all prices in the cart
const updateCartTotal = () => {
    const cartContainer = document.getElementsByClassName('cart-items')[0] ;
    const cartItem = cartContainer.getElementsByClassName('cart-item') ;
    let total = 0 ;
    for (i = 0; i < cartItem.length; i++) {
       const row = cartItem[i] ;
       const priceElement = row.getElementsByClassName('item-price')[0] ;
       const quantityInput = row.getElementsByClassName("item-quantity")[0] ;
       const price = parseFloat(priceElement.innerText.replace('R', '')) ;
       const quantity = quantityInput.value ;
       total = total + (price*quantity) ;
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-amount')[0].innerText = 'R' + total ;
}


// Ensures that quantity input is a positive integer and then updates cart total
const quantityInputs = document.getElementsByClassName('item-quantity') ;
for (i = 0; i < quantityInputs.length; i ++) {
    const input = quantityInputs[i] ;
    input.addEventListener('change', quantityChanged = (event) => {
        let input = event.target ;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1 ;
        }
        updateCartTotal() ;
    })
}

// identifies elements in teh shop catalogue that need to be transfered to the cart
const addToCartBtns = document.getElementsByClassName('add-btn') ;
for (i =0; i < addToCartBtns.length; i++) {
    const button = addToCartBtns[i] ;
    button.addEventListener('click', addBtnClicked = (event) => {
        const button = event.target ;
        const shopItem = button.parentElement ;
        const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText ;
        const price = shopItem.getElementsByClassName('shopI-price')[0].innerText ;
        const imageSrc = shopItem.getElementsByClassName('shopItem-image')[0].src ;
        console.log(title, price, imageSrc) ;
        addItemToCart(title, price, imageSrc) ;
        updateCartTotal() ;
    })
}

// Adds items to cart, with proper classes
const addItemToCart = (title, price, imageSrc) => {
    const cartRow = document.createElement('div') ;
    cartRow.classList.add('cart-item');
    const cartItems = document.getElementsByClassName('cart-items')[0] ;
    const cartItemNames = cartItems.getElementsByClassName('cart-title') ;
    for (i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart') ;
            return ;
        }
    }
    const cartItemContent = `
        <img class="cartItem-image"  src="${imageSrc}">
        <p class="cart-title">${title}</p>
        <p class="item-price">${price}</p>
        <input type="number" class="item-quantity" min="0" max="5">
        <button class="btn remv-btn">Remove</button>
        `
    cartRow.innerHTML = cartItemContent ;
    cartItems.append(cartRow) ;
    cartRow.getElementsByClassName('remv-btn')[0].addEventListener('click', removeCartItem) ;
    cartRow.getElementsByClassName('item-quantity')[0].addEventListener('change', quantityChanged) ;
}

// Purchase button functionality
document.getElementById('checkOut').addEventListener('click', checkOutClicked = (event) => {
    alert('Thank you for your purchase.') ;
    const cartItems = document.getElementsByClassName('cart-items')[0] ;
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild) ;
    }
    updateCartTotal() ;
})
