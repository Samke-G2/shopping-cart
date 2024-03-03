// Script for a shopping cart exercise I'm creating
console.log("SHOPPING CART PROJECT!!!") ;

// Addng event listeners
const removeCartItemBtns = document.getElementsByClassName('remv-btn') ;
console.log(removeCartItemBtns) ;
for (i = 0; i < removeCartItemBtns.length; i++) {
    const button = removeCartItemBtns[i] 
    button.addEventListener('click', removeCartItem = (event) => {
        const buttonClicked = event.target ;
        buttonClicked.parentElement.remove() ;
        updateCartTotal();
    })
} ;

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


// these are teh functions that make the event listeners work




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