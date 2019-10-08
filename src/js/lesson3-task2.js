let linkPref = "./img/phon"
const NAMES = ['5.9" Смартфон Samsung Galaxy A40 64 ГБ белый', '5.9" Смартфон Samsung Galaxy A40 64 ГБ красный', '5.9" Смартфон Samsung Galaxy A40 64 ГБ синий', '5.9" Смартфон Samsung Galaxy A40 64 ГБ черный', '6.4" Смартфон Samsung Galaxy A50 128 ГБ белый', '6.4" Смартфон Samsung Galaxy A50 128 ГБ синий', '6.4" Смартфон Samsung Galaxy A50 128 ГБ черный', '6.7" Смартфон Samsung Galaxy A70 128 ГБ белый', '6.7" Смартфон Samsung Galaxy A70 128 ГБ синий', '6.7" Смартфон Samsung Galaxy A80 128 ГБ золотистый', '6.7" Смартфон Samsung Galaxy A80 128 ГБ серебристый']
const PRISE = [10000, 12000, 13000, 18000, 25000, 25000, 30000, 30000, 35000, 60000, 61000]
const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const LINK = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const DATABASE = [NAMES, PRISE, ID, LINK]

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
    summCart: function () {
        let sum = 0;
        this.cart.forEach((el, i) => {
            sum += this.cart[i].prise
        })
        return sum
    }

}

shop.buildAarr() // создаем  массив магазина

function createProduct(i) { //  функция создания карточки товара на странице html
    let d = document
    let contShop = d.getElementsByClassName('pageShop')[0]

    let div = document.createElement('div');
    div.className = "product"
    contShop.appendChild(div)

    let img = d.createElement('img')
    img.src = shop.cotalog[i].link
    img.className = 'product__img'
    img.height = 300
    div.appendChild(img)

    let h4 = d.createElement('h4')
    h4.className = 'product__name'
    h4.innerHTML = shop.cotalog[i].name
    div.appendChild(h4)

    let prise = d.createElement('span')
    prise.className = 'product__name'
    prise.innerHTML = shop.cotalog[i].prise
    div.appendChild(prise)

    let valuta = d.createElement('span')
    valuta.className = 'product__valuta'
    valuta.innerHTML = ' руб'
    prise.appendChild(valuta)

    let button = d.createElement('button')
    button.className = 'product__button'
    button.id = shop.cotalog[i].id
    button.innerHTML = 'в корзину'
    div.appendChild(button)
}


function inputProduct(arr) { // функция вывода карточек товара на страницу
    for (let i = 0; i < arr.length; i++) {
        createProduct(i)
    }
}

inputProduct(DATABASE[1])  // выводим карточки товара в HTML

let buttons = d.getElementsByClassName('product__button') // достаем массив объектов кнопок

for (let i = 0; i < buttons.length; i++) { // вешаем на кнопки обработчик кликов
    buttons[i].addEventListener('click', workClike)
}

let arrId = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // массив для подсчета кликнутых иди

function workClike() {

    let per = this.parentNode // получаем родительский элемент

    shop.addObgToCard(per.childNodes[3].id) // добавляем товар в корзину  по id

    let valieId = per.childNodes[3].id - 1 // создаем перменную кликнутого id

    arrId[valieId] == 0 ? arrId[valieId] = 1 : arrId[valieId]++ // считаем клики id

    per.childNodes[3].className += " product__button-activ" // добавляем класс для нажатой кнопки 

    per.childNodes[3].innerHTML = " в корзине (" + arrId[valieId] +" шт)" //меняем надпись на кнопке

    let countCat = d.getElementById('idcount') // элемент для вывода счетчика корзины

    let sCart = d.getElementById('idSum') // элемент для вывода сумы корзины

    countCat.innerHTML = shop.cart.length //выводим счетчик корзины в html

    sCart.innerHTML = shop.summCart() + 'руб'//выводим суму корзины в html 
}

