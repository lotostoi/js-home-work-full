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
            if ((i + 1) == rndV) { return this.vall[i] }

        }
    }
}







function funClikB() {
    you = obj.vall[0]
    computer = obj.rndVal()
    console.log(you + " rrr " + computer)
    if (you === computer) {
        d.getElementById('left').setAttribute("background", "url(./../../img/hand.png)")
        d.getElementById('left').setAttribute("background", "url(./../../img/kyluck.png)")

    }

    if ((you === "бумага") && (computer === "камень")) {
        d.getElementById('left').setAttribute("background-image", "./../img/hand.png")
        d.getElementById('left').setAttribute("background-image", "./../img/kyluck.png")
    }
    if ((you === "бумага") && (computer === "ножници")) {
    d.getElementById('left').setAttribute("background-image", "./../img/hand.png")
        d.getElementById('left').setAttribute("background-image", "./../img/kyluck.png)")
    }
    if ((you === "камень") && (computer === "ножници")) {
    d.getElementById('left').setAttribute("background-image", "./../img/hand.png)")
        d.getElementById('left').setAttribute("background-image", "./../img/kyluck.png)")
    }
    if ((you === "камень") && (computer === "бумага")) {
    d.getElementById('left').setAttribute("background-image", "./../img/hand.png)")
        d.getElementById('left').setAttribute("background-image", "./../img/kyluck.png)")
    }
    if ((you === "ножници") && (computer === "бумага")) {
    d.getElementById('left').setAttribute("background-image", "./../img/hand.png)")
        d.getElementById('left').setAttribute("background-image", "./../img/kyluck.png)")
    }
    if ((you === "ножници") && (computer === "камень")) {
    d.getElementById('left').setAttribute("background-image", "./../img/hand.png)")
        d.getElementById('left').setAttribute("background-image", "./../img/kyluck.png)")
    }
}


