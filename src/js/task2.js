
let linkPref = "./build/img/phon"
const NAMES = ['5.9" Смартфон Samsung Galaxy A40 64 ГБ белый', '5.9" Смартфон Samsung Galaxy A40 64 ГБ красный', '5.9" Смартфон Samsung Galaxy A40 64 ГБ синий', '5.9" Смартфон Samsung Galaxy A40 64 ГБ черный', '6.4" Смартфон Samsung Galaxy A50 128 ГБ белый', '6.4" Смартфон Samsung Galaxy A50 128 ГБ синий', '6.4" Смартфон Samsung Galaxy A50 128 ГБ черный', '6.7" Смартфон Samsung Galaxy A70 128 ГБ белый', '6.7" Смартфон Samsung Galaxy A70 128 ГБ синий', '6.7" Смартфон Samsung Galaxy A80 128 ГБ золотистый', '6.7" Смартфон Samsung Galaxy A80 128 ГБ серебристый']
const PRISE = [10000, 12000, 13000, 18000, 25000, 25000, 30000, 30000, 35000, 60000, 61000]
const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const LINK = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const DATABASE = [NAMES, PRISE, ID, LINK]
let arrId = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // массив для подсчета кликнутых id
let classProduct = 'product' // css class карточки товара
let classProductCart = 'contCorz__product' // css class карточки товара
let classImg = 'product__img' // css class img
let classImgCart = 'contCart__product__imgCart' // css class img
let varClassName = 'product__name' // css class nane
let varClassNameCart = 'contCart__product__nameCart' // css class nane
let classPrise = 'product__prise' // css class img
let classPriseCart = 'contCart__product__priseCart' // css class PriseCart
let classQuentlyCart = 'contCart__product__quentlyCart' // css class PriseCart
let classButton = 'product__button' // css class button
let classButtonActiv = "product__button-activ" //css class activ
let f = 1

LINK.forEach((e, i) => LINK[i] = linkPref + (i + 1) + '.jpg')

//let d = document

let shop = {                                       //   создаем обЪект магазина 
    contentShop: [],
    contentCart:[],
    HtmlContShop: d.querySelector('.contProduct'),
    buildAarr: function (link, name, prise, id) { // создаем массив объектов продукта
        link.forEach((e, i) => {
            let objProduct = {
                link: link[i],
                name: name[i],
                prise: prise[i],
                id: id[i],
                quentlyInCart: 0
            }
            this.contentShop.push(objProduct)
        })
    },

    pushHtml: function () {
        this.contentShop.forEach((el, i) => {
            this.HtmlContShop.innerHTML += `
            <div class="product">
                <img src="${this.contentShop[i].link}" alt="" class="${classImg}">
                <h4 class="${varClassName}">${this.contentShop[i].name}</h4>
                <span class="${classPrise}">${this.contentShop[i].prise} руб</span>
                <button class="${classButton}" data-id='${this.contentShop[i].id}'> в корзину </button>
            </div>`
        })
    },
    
    createPageShop:function () {
        this.buildAarr(LINK, NAMES, PRISE, ID)
        this.pushHtml()
        this.addClickHandlers()
    },
    addObgToCard: function (idd) { // добавляем выбраные товары в корзину объекта
        let fl = 0
        for (let i = 0; i < this.contentShop.length; i++) {
            if (this.contentShop[i].id == idd) {
                if (this.contentCart.length === 0) {
                    this.contentCart.push(this.contentShop[i])
                    this.contentCart[0].quentlyInCart = 1
                } else {
                    this.contentCart.forEach((el, j) => {
                        if (this.contentShop.id === el.id) {
                            this.contentCart[j].quentlyInCart += 1
                            fl = 1
                        }
                    })
                    if (fl === 0) {
                        this.contentCart.quentlyInCart = 1
                        this.contentCart.push(this.contentShop[i])
    
                    }
                }
            }
        }
       /*  this.contShopCart.innerHTML = ''
        this.content.forEach((el, i) => {
            this.contShopCart.innerHTML +=
                `<div class="contCart__product">
                    <div class="contCart__product__contImg">
                        <img src="${this.content[i].link}" alt="imgCart" class="${classImgCart}">
                    </div>
                    <h4 class="${varClassNameCart}">${this.content[i].name}</h4>
                    <span class="${classPriseCart}">${this.content[i].prise} руб</span>
                    <span class="${ classQuentlyCart}">${this.content[i].quentlyInCart} шт.</span>
                </div>`
        }) */
    },
    addClickHandlers: function () {  //Вешаем обработчик кликов на контейнер для товаров
        console.log('r')
        this.HtmlContShop.addEventListener('click', (evt) => {
            if (evt.target.dataset['id']) {
                console.log(evt.target.dataset['id'])
                this.addObgToCard(evt.target.dataset['id'])
               /*   evt.target.className = classButtonActiv
                 evt.target.innerHTML = "в корзине (" + this.cotalog[evt.target.dataset['id'] - 1].quentlyInCart + " шт)"
                 d.getElementById('idcount').innerHTML = this.quently()
                 d.getElementById('buttonCart').innerHTML= "Очистить корзину"
                 d.getElementById('sum').innerHTML= this.summCart(1) + " руб"
                 d.getElementById('quently').innerHTML= this.quently() + " шт."   */
            }
        })

    }





  /*   cart: {
        cot: shop.cotalog.content,
        contShopCart: d.querySelector('.productsCart'),
        content: [],
        addObgToCard: function (idd) { // добавляем выбраные товары в корзину объекта
            let fl = 0
            for (let i = 0; i < this.cot.length; i++) {
                if (this.cot.content[i].id == idd) {
                    if (this.content.length === 0) {
                        this.content.push(this.cot.content[i])
                        this.content[0].quentlyInCart = 1
                    } else {
                        this.content.forEach((el, j) => {
                            if (this.cot.content[i].id === el.id) {
                                this.content[j].quentlyInCart += 1
                                fl = 1
                            }
                        })
                        if (fl === 0) {
                            this.cot.content[i].quentlyInCart = 1
                            this.content.push(this.cot.content[i])
                        }
                    }
                }
            }
            this.contShopCart.innerHTML = ''
            this.content.forEach((el, i) => {
                this.contShopCart.innerHTML +=
                    `<div class="contCart__product">
                        <div class="contCart__product__contImg">
                            <img src="${this.content[i].link}" alt="imgCart" class="${classImgCart}">
                        </div>
                        <h4 class="${varClassNameCart}">${this.content[i].name}</h4>
                        <span class="${classPriseCart}">${this.content[i].prise} руб</span>
                        <span class="${ classQuentlyCart}">${this.content[i].quentlyInCart} шт.</span>
                    </div>`
            })
        },
        summCart: function (flag) { // считаем сумму стоимости всех товаров в корзине
            let sum = 0;
            if (flag === 1) {
                this.cart.forEach((el, i) => {
                    sum += this.cart[i].prise * this.cart[i].quentlyInCart
                })
                return sum
            }
            if (flag === 0) {
                this.cart = []
                sum = 0
                return sum
            }
        },
        quently: function () { // число всех товаров в корзине
            let summ = 0;
            this.cart.forEach((el, i) => {
                summ += el.quentlyInCart
            })
            return summ
        }
    },
    addClickHandlers: function () {  //Вешаем обработчик кликов на контейнер для товаров
        console.log('r')
        this.cotalog.HtmlContShop.addEventListener('click', (evt) => {
            if (evt.target.dataset['id']) {
                console.log('r')
                this.cart.addObgToCard(evt.target.dataset['id'])
                 evt.target.className = classButtonActiv
                 evt.target.innerHTML = "в корзине (" + this.cotalog[evt.target.dataset['id'] - 1].quentlyInCart + " шт)"
                 d.getElementById('idcount').innerHTML = this.quently()
                 d.getElementById('buttonCart').innerHTML= "Очистить корзину"
                 d.getElementById('sum').innerHTML= this.summCart(1) + " руб"
                 d.getElementById('quently').innerHTML= this.quently() + " шт."  
            }
        })

    } */


}

shop.createPageShop()
//shop.addClickHandlers()
























//<label for="cart" class="headerCart__label" onclick="cartOpen()">
//<button class="sumAndQuently__button" onclick="clean()" id="buttonCart">Корзина пуста</button>  

//shop.buildAarr() // создаем  массив магазина
/*

function createProduct(i) { //  функция создания карточки товара на странице html

    let contShop = d.querySelector('.contProduct')

    contShop.innerHTML += `
        <div class="product">
            <img src="${shop.cotalog[i].link}" alt="" class="${classImg}">
            <h4 class="${varClassName}">${shop.cotalog[i].name}</h4>
            <span class="${classPrise}">${shop.cotalog[i].prise} руб</span>
            <button class="${classButton}" id='${shop.cotalog[i].id}'> в корзину </button>
        </div>`

}


function inputProduct(arr) { // функция вывода карточек товара на страницу
    for (let i = 0; i < arr.length; i++) {
        createProduct(i)
    }
}

inputProduct(LINK) // выводим карточки товара в HTML


d.querySelector('.contProduct').addEventListener('click', workClike)

function workClike(e) {

    if ((e.target.className === classButton) || (e.target.className === classButtonActiv)) {
        shop.addObgToCard(e.target.id) // добавляем товар в корзину  по id
        e.target.className = classButtonActiv
        e.target.innerHTML = "в корзине (" + shop.cotalog[e.target.id - 1].quentlyInCart + " шт)"
        console.log(shop)
        let countCat = d.getElementById('idcount') // элемент для вывода счетчика корзины
        countCat.innerHTML = shop.quently() //выводим счетчик корзины в html
        inputProductInCart()
        let valueTegButtonCart = d.getElementById('buttonCart')
        valueTegButtonCart.innerHTML = "Очистить корзину"
        let SumCart = d.getElementById('sum')
        SumCart.innerHTML = shop.summCart(1) + " руб"
        let QuentlyCart = d.getElementById('quently')
        QuentlyCart.innerHTML = shop.quently() + " шт."

    }
}

function createCartProduct(i) { //  функция создания карточки товара в корзине
    let contShopCart = d.querySelector('.productsCart')
    contShopCart.innerHTML += `
        <div class="contCart__product">
            <div class="contCart__product__contImg">
                <img src="${shop.cart[i].link}" alt="imgCart" class="${classImgCart}">
            </div>
            <h4 class="${varClassNameCart}">${shop.cart[i].name}</h4>
            <span class="${classPriseCart}">${shop.cart[i].prise} руб</span>
            <span class="${ classQuentlyCart}">${shop.cart[i].quentlyInCart} шт.</span>
        </div>`
}

function inputProductInCart() { // функция вывода карточек товара в корзину
    dellElCartHTML()
    let lengthCart = shop.cart.length
    for (let i = 0; i < lengthCart; i++) {
        createCartProduct(i)
    }
}


function dellElCartHTML() { //  функция удаления элементов  HTML из корзины
    let elemsCart = d.querySelector('.productsCart');
    elemsCart.innerHTML = ''
}

function clean() { // функция полной очитски корзыны
    let buttun = d.getElementsByClassName(classButtonActiv)
    arrId = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let countCat = d.getElementById('idcount') // элемент для вывода счетчика корзины
    countCat.innerHTML = 0;
    while (buttun.length != 0) {
        for (let i = 0; i < buttun.length; i++) {
            buttun[i].innerHTML = " в корзину " //меняем надпись на кнопке
            buttun[i].className = classButton
        }
    }
    let valueTegButtonCart = d.getElementById('buttonCart')
    valueTegButtonCart.innerHTML = "Корзина пуста"
    let SumCart = d.getElementById('sum')
    SumCart.innerHTML = 0 + " руб"
    let QuentlyCart = d.getElementById('quently')
    QuentlyCart.innerHTML = 0 + " шт."
    shop.cart = []
    shop.summCart(0)
    dellElCartHTML()
}

let but = d.querySelector('.buttonCart')
but.onclick = clean

d.querySelector('.headerCart__label').onclick = () => { //обработка клика нажатия корзины
    if (f === 1) {
        $('#Cartt').slideToggle(400);
        f = 0
    } else {
        $('#Cartt').slideUp(400);
        f = 1
    }

}


 */