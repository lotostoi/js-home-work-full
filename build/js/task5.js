

function calc() {


    contDinPage.className = 'calc'

    let arrButtons = [ //массив кнопок калькулятора [css-class] [data-х] [value data-x] [ value of tegs]
        ['number', 'number', '0', '0'],
        ['number', 'number', '1', '1'],
        ['number', 'number', '2', '2'],
        ['number', 'number', '3', '3'],
        ['number', 'number', '4', '4'],
        ['number', 'number', '5', '5'],
        ['number', 'number', '6', '6'],
        ['number', 'number', '7', '7'],
        ['number', 'number', '8', '8'],
        ['number', 'number', '9', '9'],
        ['point', 'number', '.', '.'],
        ['opereation', 'opereation', '-', '-'],
        ['opereation', 'opereation', '+', '+'],
        ['opereation', 'opereation', '*', '*'],
        ['opereation', 'opereation', '/', '/'],
        ['opereation', 'opereation', '=', '='],
        ['opereation', 'opereation', 'clean', 'C'],
    ]


    contDinPage.innerHTML = `
    <div class="bodyCalc">
    <div class="wind"></div>
    </div>
    `
    let var1 = ''
    let opereation = ''
    let opereationReady = false

    let bodyCalc = d.querySelector('.bodyCalc')
    var win = d.querySelector('.wind')
    win.innerHTML = win.innerHTML = ''


    arrButtons.forEach((el, i) => {
        bodyCalc.innerHTML += `<button class="${el[0]}" data-${el[1]}="${el[2]}" >${el[3]}</button>`
    })



    bodyCalc.addEventListener('click', collectNumber)



    function collectNumber(event) {
        win = d.querySelector('.wind')
        if (event.target.dataset['number']) { //собираем число!
            if (opereationReady) { win.innerHTML = '' }
            win.innerHTML += event.target.innerHTML
            opereationReady = false
        }
        if (event.target.dataset['opereation'] == 'clean') {
            win.innerHTML = ''
        }
        if ((event.target.dataset['opereation'] == '-') || (event.target.dataset['opereation'] == '+') || (event.target.dataset['opereation'] == '*') || (event.target.dataset['opereation'] == '/')) {
            var1 = +win.innerHTML
            opereation = event.target.dataset['opereation']
            win.innerHTML = ''
            console.log(event.target.dataset['opereation'])
        }
        if (event.target.dataset['opereation'] == '=') {
            switch (opereation) {
                case '-': win.innerHTML = var1 - (+win.innerHTML)
                    break
                case '+': win.innerHTML = var1 + (+win.innerHTML)
                    break
                case '*': win.innerHTML = var1 * (+win.innerHTML)
                    break
                case '/': ((+win.innerHTML) == 0) ? win.innerHTML = "Деление на 0!" : win.innerHTML = var1 / (+win.innerHTML)
                    break
                default: win.innerHTML = ''
            }
            opereationReady = true
        }
    }




    function str(arr) { //  функция приобразования строки в масив числе и операндов
        let mas = [...arr]
        let varArr = []
        let Arr = []
        let flag = 0
        let var1 = 0
        number = +0
        /*   if (mas[mas.length - 1] === ')') {
              mas.pop()
              flag = 1
          } */

        mas.forEach((el, i) => {

            if ((el !== '+') && (el !== '-') && (el !== '*') && (el !== '/') && (el !== ')') && (el !== '(') && ((mas.length - 1) !== i)) {
                varArr.push(el)
            }
            else {


                if (varArr.length > 0) {
                    var1 = +varArr.join('')
                    varArr = []
                    Arr.push(var1)
                    var1 = 0
                }

                if ((mas.length - 1) === i) {
                    Arr.push(mas[mas.length - 1])                
                }
                if ((mas.length - 1) !== i) { Arr.push(el) }
            }
        })


        return Arr

    }

    function calcString(arr) { //функция считащаяя умножение и деление
        let mas = []
        arr.forEach((el, i) => {
            if ((el === '*') || (el === '/')) {
                if (el === '*') {
                    arr.splice(i - 1, 3, (arr[i - 1] * arr[i + 1]))
                }
                if (el === '/') {
                    arr.splice(i - 1, 3, (arr[i - 1] / arr[i + 1]))
                }
                calcString(arr)
            } else {
                mas = arr

            }
        })
        return mas
    }




    function itog(arr) { //функция считащая сложение и вычитание 
        let mas = []
        arr.forEach((el, i) => {
            if ((el === '+') || (el === '-')) {
                if (el === '+') {
                    arr.splice(i - 1, 3, (arr[i - 1] + arr[i + 1]))
                }
                if (el === '-') {
                    arr.splice(i - 1, 3, (arr[i - 1] - arr[i + 1]))
                }
                itog(arr)
            } else {
                mas = arr

            }
        })
        return mas
    }


    function allItog(arr) { // функция считающая выражения в скобках
        let start = 0
        let vArr = []
        let flag = false
        arr.forEach(function (el, i) {

            if (el === '(') {
                start = i
                flag = true
            }

            if (flag) { vArr.push(el) }

            if ((el === '(') && (flag)) {
                start = i
                vArr = []
                vArr.push(el)
            }


            if (el === ')') {
                vArr.pop()
                vArr.shift()
                arr.splice(start, (vArr.length + 2), itog(calcString(vArr))[0])
                allItog(arr)
            }
        })
        return arr
    }


    let str1 = '2*2+6*3'
    console.log(str1)
    console.log(str(str1))

    function allCalc(string) {
        console.log(itog(calcString(allItog(str(string)))))
        return itog(calcString(allItog(str(string))))
    }
    allCalc(str1)
}

