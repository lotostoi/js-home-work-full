let linkPref = "./img/bike"
const NAMES = ['5.9" Смартфон Samsung Galaxy A40 64 ГБ белый', '5.9" Смартфон Samsung Galaxy A40 64 ГБ красный', '5.9" Смартфон Samsung Galaxy A40 64 ГБ синий', '5.9" Смартфон Samsung Galaxy A40 64 ГБ черный', '6.4" Смартфон Samsung Galaxy A50 128 ГБ белый', '6.4" Смартфон Samsung Galaxy A50 128 ГБ синий', '6.4" Смартфон Samsung Galaxy A50 128 ГБ черный', '6.7" Смартфон Samsung Galaxy A70 128 ГБ белый', '6.7" Смартфон Samsung Galaxy A70 128 ГБ синий', '6.7" Смартфон Samsung Galaxy A80 128 ГБ золотистый', '6.7" Смартфон Samsung Galaxy A80 128 ГБ серебристый']
const PRISE = [10000, 12000, 13000, 18000, 25000, 25000, 30000, 30000, 35000, 60000, 61000]
const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const LINK = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const DATABASE = [NAMES,PRISE,ID,LINK]

LINK.forEach((e, i) => LINK[i] = linkPref + (i + 1) + '.jpg')


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
        objProduct.test=5;
        for (let i = 0; i < DATABASE[1].length; i++) {
            objProduct = {
                link: LINK[i],
                name: NAMES[i],
                prise: PRISE[i],
                test: ID[i]
            }        
            this.cotalog.push(objProduct)
        }
    },
    addObgToCard: function (obj) {
        this.cart.push()
    } 
}

shop.buildAarr()


let d=document
let contShop=d.getElementsByClassName('pageShop')[0]

let div = document.createElement('div');
div.className = "product"
contShop.appendChild(div)

let img=d.createElement('img')
img.src=shop.cotalog[0].link
img.width=200
div.appendChild(img)


img.src=shop.cotalog[0].link
img.width=200
div.appendChild(img)

let h4=d.createElement('prise')
h4.className='product__name'
h4.innerHTML=shop.cotalog[0].name
div.appendChild(h4)