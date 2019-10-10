let d = document;
let you = []
let computer = []


let obj = {
    vall: ['бумага', 'камень', 'ножници'],
    rndVal: function () {
        text = ''
        min = 1;
        max = 4;
        rndV = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        for (let i = 0; i < this.vall.length; i++) {
            if ((i + 1) == rndV) {
                return this.vall[i]
            }

        }
    }
}







function funClikB() {
    you = obj.vall[0]
    computer = obj.rndVal()
    if ((you === computer) && (you === obj.vall[0])) {
        d.getElementById('left').className = 'windGame__h'
        d.getElementById('right').className = 'windGame__h'

        d.getElementById('itog').innerHTML = "Ничья!"
    }

    if ((you === "бумага") && (computer === "камень")) {
        d.getElementById('left').className = 'windGame__h'
        d.getElementById('right').className = 'windGame__k'
        d.getElementById('itog').innerHTML = "Ты выиграл"

    }
    if ((you === "бумага") && (computer === "ножници")) {
        d.getElementById('left').className = 'windGame__h'
        d.getElementById('right').className = 'windGame__k'
        d.getElementById('itog').innerHTML = "Ты проиграл"


    }
}

function funClikK() {
    console.log(111)
    you = obj.vall[1]
    computer = obj.rndVal()

    if ((you === computer) && (you === obj.vall[1])) {
        d.getElementById('left').className = 'windGame__k'
        d.getElementById('right').className = 'windGame__k'
        d.getElementById('itog').innerHTML = "Ничья!"
    }

    if ((you === "камень") && (computer === "ножници")) {
        d.getElementById('left').className = 'windGame__k'
        d.getElementById('right').className = 'windGame__n'
        d.getElementById('itog').innerHTML = "Ты выиграл"

    }
    if ((you === "камень") && (computer === "бумага")) {
        d.getElementById('left').className = 'windGame__k'
        d.getElementById('right').className = 'windGame__h'
        d.getElementById('itog').innerHTML = "Ты проиграл"

    }

}

function funClikN() {

    you = obj.vall[2]
    computer = obj.rndVal()

    if ((you === computer) && (you === obj.vall[2])) {
        d.getElementById('left').className = 'windGame__n'
        d.getElementById('right').className = 'windGame__n'
        d.getElementById('itog').innerHTML = "Ничья!"
    }

    if ((you === "ножници") && (computer === "бумага")) {
        d.getElementById('left').className = 'windGame__n'
        d.getElementById('right').className = 'windGame__h'
        d.getElementById('itog').innerHTML = "Ты выиграл"

    }
    if ((you === "ножници") && (computer === "камень")) {
        d.getElementById('left').className = 'windGame__n'
        d.getElementById('right').className = 'windGame__k'
        d.getElementById('itog').innerHTML = "Ты проиграл"
    }
}