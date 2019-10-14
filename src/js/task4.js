arrObj = {
    row1: [{ t1: 1, t3: 3, t4: 4, t5: 5, t2: { test: 5, max: 20 } }],
    row2: [{ t4: 4, t5: 5, t2: { dfd: 5, sdfd: 20 } }],
    row3: [{ t1: 1, t3: { rr: 6, ww: 230 }, t4: 4, t5: 5, t2: { hh: '44', ll: 'tt' } }],
    row4: [{ t1: 1, t3: 3, t4: 4, t5: 5, t2: { test: 5, max: 20 } }],
    row5: [{ t1: 1, t3: 3, t4: 4, t5: 5 }]
}




outArr = []
let i = 0

function objectTraversal(arr) {
    for (const key in arr) {
        outArr.push(arr[key])
        if (typeof (arr[key]) === 'object') {
          // objectTraversal(arr[key])
            setTimeout(function () { objectTraversal(arr[key]) }, 1);

        }   
    }
    return outArr   
}



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



let shop = { //   создаем обЪект магазина 
    cotalog: [],
    cart: [],
    buildAarr: function () { // загружаем данные в обект из масивов бд
        let objProduct = {
            link: 0,
            name: 0,
            prise: 0,
            id: 0,
            quentlyInCart: 0
        }
        for (let i = 0; i < DATABASE[1].length; i++) {
            objProduct = {
                link: LINK[i],
                name: NAMES[i],
                prise: PRISE[i],
                id: ID[i],
                quentlyInCart: 0
            }
            this.cotalog.push(objProduct)
        }
    },
    addObgToCard: function (idd) { // добавляем выбраные товары в корзину объекта
        let fl = 0
        for (let i = 0; i < this.cotalog.length; i++) {
            if (this.cotalog[i].id == idd) {
                if (this.cart.length === 0) {
                    this.cart.push(this.cotalog[i])
                    this.cart[0].quentlyInCart = 1
                } else {
                    this.cart.forEach((el, j) => {
                        if (this.cotalog[i].id === el.id) {
                            this.cart[j].quentlyInCart += 1
                            fl = 1
                        }
                    })
                    if (fl === 0) {
                        this.cotalog[i].quentlyInCart = 1
                        this.cart.push(this.cotalog[i])
                    }
                }
            }
        }
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

}


shop.buildAarr()


console.log(objectTraversal(shop))