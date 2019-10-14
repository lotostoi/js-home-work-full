function cart() {


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

    contDinPage.className = 'dinamikPage_Cart'
    contDinPage.innerHTML = `
    <header class="headerCart">
        <h1 class="headerCart__h1">Задание: Работа над корзиной! </h1>
        <div class="headerCart__iconCart">
            <input type="checkbox" id="cart" class="headerCart__input">
            <label for="cart" class="headerCart__label">
                <div class="headerCart__img"></div>
            </label>
            <span class="headerCart__count" id="idcount">0</span>
            <div class="contCart" id="Cartt">
             <div class="productsCart"></div>
             <div class="sumAndQuently">
                <span class="sumAndQuently__text">Итого</span>
                <span class="sumAndQuently__summ" id="sum">0</span>
                <span class="sumAndQuently__quently" id="quently">0</span>
             </div>
             <button class="buttonCart" id="buttonCart">Корзина пуста</button>  
          </div> 
        </div> 
    </header> 
    <div class="contProduct"></div>`

    //<label for="cart" class="headerCart__label" onclick="cartOpen()">
    //<button class="sumAndQuently__button" onclick="clean()" id="buttonCart">Корзина пуста</button>  

    shop.buildAarr() // создаем  массив магазина


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

  
}