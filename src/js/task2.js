
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


LINK.forEach((e, i) => LINK[i] = linkPref + (i + 1) + '.jpg')



let shop = {                                         //   создаем обЪект магазина 
    contentShop: [],
    contentCart: [],
    HtmlContShop: d.querySelector('.contProduct'),
    contShopCart: d.querySelector('.productsCart'),
    buildAarr: function (link, name, prise, id) {    // создаем массив объектов продукта
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

    createPageShop: function () {
        this.buildAarr(LINK, NAMES, PRISE, ID)
        this.pushHtml()
        this.addClickHandlers() 
        this.cleanCart()
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
                        if (this.contentShop[i].id === el.id) {
                            this.contentCart[j].quentlyInCart += 1
                            fl = 1
                        }
                    })
                    if (fl === 0) {
                        this.contentShop[i].quentlyInCart = 1
                        this.contentCart.push(this.contentShop[i])

                    }
                }
            }
        }
    },
    pushHtmlCart: function () {
        this.contShopCart.innerHTML = ''
        this.contentCart.forEach((el, i) => {
            this.contShopCart.innerHTML +=
                `<div class="contCart__product">
                 <div class="contCart__product__contImg">
                     <img src="${this.contentCart[i].link}" alt="imgCart" class="${classImgCart}">
                 </div>
                 <h4 class="${varClassNameCart}">${this.contentCart[i].name}</h4>
                 <span class="${classPriseCart}">${this.contentCart[i].prise} руб</span>
                 <span class="${ classQuentlyCart}">${this.contentCart[i].quentlyInCart} шт.</span>
                 <button class="contCart__product__del"> &#10008 </button>
             </div>`
        })
    },
    summCart: function (flag) { // считаем сумму стоимости всех товаров в корзине
        let sum = 0;
        if (flag === 1) {
            this.contentCart.forEach((el, i) => {
                sum += this.contentCart[i].prise * this.contentCart[i].quentlyInCart
            })
            return sum
        }
        if (flag === 0) {
            this.contentCart = []
            sum = 0
            return sum
        }
    },
    quently: function () { // число всех товаров в корзине
        let summ = 0;
        this.contentCart.forEach((el, i) => {
            summ += el.quentlyInCart
        })
        return summ
    },
    cleanCart: function () {
        d.querySelector('.buttonCart').onclick = clean// функция полной очитски корзыны
        function clean() {
            let buttun = d.getElementsByClassName(classButtonActiv)
            d.getElementById('idcount').innerHTML = 0 // элемент для вывода счетчика корзины
            while (buttun.length != 0) {
                for (let i = 0; i < buttun.length; i++) {
                    buttun[i].innerHTML = " в корзину " //меняем надпись на кнопке
                    buttun[i].className = classButton
                }
            }
            d.getElementById('buttonCart').innerHTML = "Корзина пуста"
            d.getElementById('sum').innerHTML = 0 + " руб"
            d.getElementById('quently').innerHTML = 0 + " шт."
            shop.contentCart=[]
            shop.summCart(0)
            d.querySelector('.productsCart').innerHTML = ''
        }
        let f = 1
        d.querySelector('.headerCart__label').onclick = () => { //обработка клика нажатия корзины
            if (f === 1) {
                $('#Cartt').slideToggle(200);
                f = 0
            } else {
                $('#Cartt').slideUp(200);
                f = 1
            }
        
        }
    },

    addClickHandlers: function () {  //Вешаем обработчик кликов на контейнер для товаров      
        this.HtmlContShop.addEventListener('click', (evt) => {
            if (evt.target.dataset['id']) {
                this.addObgToCard(evt.target.dataset['id'])
                this.pushHtmlCart()
                evt.target.className = classButtonActiv
                evt.target.innerHTML = "в корзине (" + this.contentShop[evt.target.dataset['id'] - 1].quentlyInCart + " шт)"
                d.getElementById('idcount').innerHTML = this.quently()
                d.getElementById('buttonCart').innerHTML = "Очистить корзину"
                d.getElementById('sum').innerHTML = this.summCart(1) + " руб"
                d.getElementById('quently').innerHTML = this.quently() + " шт."
            }
        })
    }
}

shop.createPageShop()
























