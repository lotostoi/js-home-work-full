/* 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */


function f5() {
    let numberRows = +prompt(' Введите количество слоев пирамиды!')

    function building() {
        let arr = ""
        while (--numberRows >= 0) {
            arr += "X"
            console.log(arr)
        }
    }
    building()
}


let div = document.getElementById('out');

let myScript5 = () => {

    let numberRows = document.getElementById('top').value;
    document.getElementById('top').value = '';

    if (numberRows <= 30) {

        function building() {
            // console.log(numberRows)
            arr = ""
            div.innerHTML = arr
            while (--numberRows >= 0) {
                arr += "X"
                div.innerHTML += arr + "<br>"
                //  console.log(arr)
            }
        }

        building()
    } else {
        div.innerHTML = 'Введите число меньше 30' 
    }
}