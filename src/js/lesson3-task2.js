var d = document,
    itemBox = d.querySelectorAll('.product')
button = d.querySelectorAll('.product__button')
// cartCont = d.getElementById('cart_content') 

let tt = "кккк"


function pop()  {
    per = this.parentNode
    dataId= per.getAttribute("data-id")
  
    console.log('yyy' +  per.getAttribute("data-id"))
}






for (let i = 0; i < button.length; i++) {

   // button[i].textContent = tt

   button[i].onclick = pop


}



/* itemId = this.getAttribute('data-id') */