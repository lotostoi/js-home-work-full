let d = document;
let listA = d.querySelectorAll('.header__li')

listA.forEach((el, i) => {
    listA[i].setAttribute("id", i + 1)
    listA[i].addEventListener('click', workLink)
})

function workLink() {
    let par = event.target
    switch (+par.id) {
        case 1: creatMainPage()
            break;
        case 2: createGal() 
            break;
        case 3: createPageCart()
            break;
        case 4: console.log('шахмоты')
            break;

    }
}

let contDinPage = d.querySelector('.dinamikPage')

function createPageCart() {
    cart()
    listA[0].removeAttribute('style','color:red')
    listA[2].setAttribute('style','color:red')
}

function creatMainPage(){
    contDinPage.className='dinamikPage'
    contDinPage.innerHTML =''
    listA[0].setAttribute('style','color:red')
    listA[2].removeAttribute('style','color:red')
}
