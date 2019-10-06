//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (УТОЧНИТЬ НАСЧЕТ ПРОСТЫХ ЧИСЕЛ)

let f1 = (minRange,maxRange) => {
    
    let comp = (number) => (minRange - 1) / number > 1 && (minRange - 1) % number === 0
    console.log("Простые числа из диапазона от " + minRange + " до " + maxRange + ": ")
  
    while ((minRange++) <= maxRange) {

        if (((minRange - 1) === 1 || comp(2) || comp(3) || comp(5) || comp(7) || comp(9)) === false) {
           console.log(minRange - 1)
         
        }
    }

}



let myScript1 = () => {

    let f1 = (minRange, maxRange) => {

        let comp = (number) => (minRange - 1) / number > 1 && (minRange - 1) % number === 0

        let string = "Простые числа из диапазона от " + minRange + " до " + maxRange + ": "

        while ((minRange++) <= maxRange) {

            if (((minRange - 1) === 1 || comp(2) || comp(3) || comp(5) || comp(7) || comp(9)) === false) {
              
                string += ' ' + (minRange - 1)
            }
        }
        return string

    }

    let min = document.getElementById('v1').value
    let max = document.getElementById('v2').value

    document.getElementById('v1').value = '';
    document.getElementById('v2').value = '';

    let div = document.getElementById('out');


    (min === "" || max === "" || isNaN(min) || isNaN(max)) ? div.innerHTML = 'Вы ввели некорректные значения': div.innerHTML = f1(min, max)

}