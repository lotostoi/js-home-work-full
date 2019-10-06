var d = document,
    itemBox = d.querySelectorAll('.product')
button = d.querySelectorAll('.product__button')
// cartCont = d.getElementById('cart_content') 

let tt = "кккк"


function pop(button)  {
    itemId = button.getAttribute('data-id')
    console.log(itemId)
}






for (let i = 0; i < button.length; i++) {

   // button[i].textContent = tt

   button[i].onclick = "pop(this)"


}



/* itemId = this.getAttribute('data-id') */