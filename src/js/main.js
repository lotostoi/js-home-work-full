let d = document;
let listA = d.querySelectorAll('.header__li')

listA.forEach((el, i) => {
    listA[i].setAttribute("id", i + 1)
    listA[i].addEventListener('click', workLink)
})

function workLink() {
    let par = event.target
    switch (+par.id) {
        case 1: console.log('галерея')
            break;
        case 2: createPageCart()
            break;
        case 3: console.log('шахмоты')
            break;

    }
}

let contDinPage = d.querySelector('.dinamikPage')

function createPageCart() {
    contDinPage.innerHTML ='\
           <div class="headerCart">\
            <h1 class="headerCart__h1">Задание: Работа над корзиной! </h1>\
            <div class="contCorz">\
                <input type="checkbox" id="cart" class="contCorz__input">\
                    <label for="cart" class="contCorz__label" onclick="cartOpen()">\
                        <div class="contCorz__img"></div>\
                    </label>\
                    <div class="contCorz__contProduct" id="Cartt">\
                        <div class="productCart"></div>\
                        <div class="contCorz__summAndQuently">\
                            <span class="contCorz__text">Итого</span>\
                            <span class="contCorz__summ" id="sum">0</span>\
                            <span class="contCorz__quently" id="quently">0</span></div>\
                        <button class="contCorz__button" onclick="clean()" id="buttonCart">Корзина пуста</button>\
                    </div>\
                    <div class="contCorz__count" id="idcount">0</div>\
                    <div class="contCorz__ollSum" id="idSum">0</div>\
                </div>\
            </div>\
            <div class="pageShop"></div>'
}