let linkPref = "./img/phon"
const NAMES = ['5.9" Смартфон Samsung Galaxy A40 64 ГБ белый', '5.9" Смартфон Samsung Galaxy A40 64 ГБ красный', '5.9" Смартфон Samsung Galaxy A40 64 ГБ синий', '5.9" Смартфон Samsung Galaxy A40 64 ГБ черный', '6.4" Смартфон Samsung Galaxy A50 128 ГБ белый', '6.4" Смартфон Samsung Galaxy A50 128 ГБ синий', '6.4" Смартфон Samsung Galaxy A50 128 ГБ черный', '6.7" Смартфон Samsung Galaxy A70 128 ГБ белый', '6.7" Смартфон Samsung Galaxy A70 128 ГБ синий', '6.7" Смартфон Samsung Galaxy A80 128 ГБ золотистый', '6.7" Смартфон Samsung Galaxy A80 128 ГБ серебристый']
const PRISE = [10000, 12000, 13000, 18000, 25000, 25000, 30000, 30000, 35000, 60000, 61000]
const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const LINK = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const DATABASE = [NAMES, PRISE, ID, LINK]
let arrId = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // массив для подсчета кликнутых id
let classProduct = 'product' // css class карточки товара
let classProductCart = 'contCorz__product' // css class карточки товара
let classImg = 'product__img' // css class img
let classImgCart = 'contCorz__product__imgCart' // css class img
let varClassName = 'product__name' // css class nane
let varClassNameCart = 'contCorz__product__nameCart' // css class nane
let classPrise = 'product__prise' // css class img
let classPriseCart = 'contCorz__product__priseCart' // css class img
let classButton = 'product__button' // css class button
let classButtonActiv = " product__button-activ" //css class activ


LINK.forEach((e, i) => LINK[i] = linkPref + (i + 1) + '.jpg')

let d = document;

let shop = {
    cotalog: [],
    cart: [],
    buildAarr: function () {
        let objProduct = {
            link: 0,
            name: 0,
            prise: 0,
            id: 0
        }
        for (let i = 0; i < DATABASE[1].length; i++) {
            objProduct = {
                link: LINK[i],
                name: NAMES[i],
                prise: PRISE[i],
                id: ID[i]
            }
            this.cotalog.push(objProduct)
        }
    },
    addObgToCard: function (idd) {
        for (let i = 0; i < this.cotalog.length; i++) {
            if (this.cotalog[i].id == idd) {
                this.cart.push(this.cotalog[i])
            }
        }
    },
    summCart: function (flag) {
        let sum = 0;
        if (flag === 1) {
            this.cart.forEach((el, i) => {
                sum += this.cart[i].prise
            })
            return sum
        }
        if (flag === 0) {
            this.cart = []
            sum = 0
            return sum
        }
    }
}

shop.buildAarr() // создаем  массив магазина

function addElltoProduct(nameParent, typeEl, classEl, valueEl, linkEl, idEl) { //функция создания тега в теге nameParent
    let nameEl = d.createElement(typeEl)                   // синтаксис addElltoProduct(arg,'arg',arg,arg,arg,arg)
    if (classEl != 'none') { nameEl.className = classEl }
    if (valueEl != 'none') { nameEl.innerHTML = valueEl }
    if (linkEl != 'none') { nameEl.src = linkEl }
    if (idEl != 'none') { nameEl.id = idEl }
    nameParent.appendChild(nameEl)
}

function createProduct(i) { //  функция создания карточки товара на странице html

    let contShop = d.getElementsByClassName('pageShop')[0]
    let div = document.createElement('div');
    div.className = "product"
    contShop.appendChild(div)

    addElltoProduct(div, 'img', classImg, 'none', shop.cotalog[i].link, 'none')
    addElltoProduct(div, 'h4', varClassName, shop.cotalog[i].name, 'none', 'none')
    addElltoProduct(div, 'span', classPrise, shop.cotalog[i].prise + ' руб', 'none', 'none')
    addElltoProduct(div, 'button', classButton, 'в корзину', 'none', shop.cotalog[i].id)
}


function inputProduct(arr) { // функция вывода карточек товара на страницу
    for (let i = 0; i < arr.length; i++) {
        createProduct(i)
    }
}

inputProduct(DATABASE[1])  // выводим карточки товара в HTML

let buttons = d.getElementsByClassName(classButton) // достаем массив объектов кнопок
for (let i = 0; i < buttons.length; i++) { // вешаем на кнопки обработчик
    buttons[i].addEventListener('click', workClike)
}


function workClike() { // обработчик кликов
    let per = this.parentNode // получаем родительский элемент
    shop.addObgToCard(per.childNodes[3].id) // добавляем товар в корзину  по id
    let valieId = per.childNodes[3].id - 1 // создаем перменную кликнутого id
    arrId[valieId] == 0 ? arrId[valieId] = 1 : arrId[valieId]++ // считаем клики id
    per.childNodes[3].className = classButtonActiv // добавляем класс для нажатой кнопки 
    per.childNodes[3].innerHTML = " в корзине (" + arrId[valieId] + " шт)" //меняем надпись на кнопке
    let countCat = d.getElementById('idcount') // элемент для вывода счетчика корзины
    let sCart = d.getElementById('idSum') // элемент для вывода сумы корзины
    countCat.innerHTML = shop.cart.length //выводим счетчик корзины в html
    sCart.innerHTML = shop.summCart(1) + 'руб'//выводим суму корзины в html 
    inputProductInCart()

}

function clean() {
    let buttun = d.getElementsByClassName(classButtonActiv) // получаем родительский элемент
    arrId = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let sCart = d.getElementById('idSum') // элемент для вывода сумы корзины
    let countCat = d.getElementById('idcount') // элемент для вывода счетчика корзины
    countCat.innerHTML = 0;
    sCart.innerHTML = shop.summCart(0)
    while (buttun.length != 0) {
        for (let i = 0; i < buttun.length; i++) {
            buttun[i].innerHTML = " в корзине " //меняем надпись на кнопке
            buttun[i].className = classButton
        }
    }
    dellElCartHTML()
}



function createCartProduct(i) { //  функция создания карточки товара в корзине

    let contShop = d.getElementsByClassName('productCart')[0]
    console.log(contShop + '33')
    let div = document.createElement('div');
    div.className = "contCorz__product"
    contShop.appendChild(div)

    let contImg = document.createElement('div');
    contImg.className = "contCorz__contImg"
    div.appendChild(contImg)


    addElltoProduct(contImg, 'img', classImgCart, 'none', shop.cart[i].link, 'none')

    addElltoProduct(div, 'h4', varClassNameCart, shop.cart[i].name, 'none', 'none')
    addElltoProduct(div, 'span', classPriseCart, shop.cart[i].prise + ' руб', 'none', 'none')
    // addElltoProduct(div, 'button', classButtonCart, 'в корзину', 'none', shop.cart[i].id)
}

function inputProductInCart() { // функция вывода карточек товара на страницу
    dellElCartHTML()
    let lengthCart = shop.cart.length
    for (let i = 0; i < lengthCart; i++) {
        createCartProduct(i)
    }

}

//inputProductInCart()  // выводим карточки товара в HTML

function dellElCartHTML() {
    let elemsCart = d.getElementsByClassName('contCorz__product');
    while (elemsCart[0]) {
        elemsCart[0].parentNode.removeChild(elemsCart[0]);
    }
} 
