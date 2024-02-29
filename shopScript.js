// Script for a shopping cart exercise I'm creating
console.log("SHOPPING CART PROJECT!!!") ;



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
        console.log(price*quantity) ;
        total = total + (price*quantity) ;
     }
     document.getElementsByClassName('cart-total-amount')[0].innerText = 'R' + total ;
}