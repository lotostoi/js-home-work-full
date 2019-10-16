function calc() {


    contDinPage.className = 'calc'

    let arrButtons = [ //массив кнопок калькулятора [css-class] [data-х] [value data-x] [ value of tegs]
        ['number', 'operation', 'clean', 'C'],
        ['number', 'operation', '<<', '<<'],
        ['number', 'number', '(', '('],
        ['number', 'number', ')', ')'],
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
        ['number', 'number', '.', '.'],
        ['number', 'number', '-', '-'],
        ['number', 'number', '+', '+'],
        ['number', 'number', '*', '*'],
        ['number', 'number', '/', '/'],
        ['number', 'operation', '=', '='],


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
        if (event.target.dataset['number']) {
            if (opereationReady) {
                win.innerHTML = ''
            }
            win.innerHTML += event.target.innerHTML

            opereationReady = 0

        }
        if (event.target.dataset['operation'] === '=') {

            let var1 = win.innerText

            if (isNaN(allCalc(var1))) {
                win.innerHTML = `<span style='color:rgb(139, 27, 42); font-weight: 400'>  Это не посчитать!!!  </span>`
            } else
            if (allCalc(var1) === Infinity) {
                win.innerHTML = `<span style='color:rgb(139, 27, 42); font-weight: 400'>  Деление на 0!!  </span>`
            } else {
                win.innerHTML = allCalc(var1)
            }

            opereationReady = 1

        }

        if (event.target.dataset['operation'] === 'clean') {

            win.innerHTML = ''
        }
        if (event.target.dataset['operation'] === '<<') {


            let arr = [...win.innerText]

            arr.pop()

            win.innerHTML = arr.join('')

        }

    }

    function str(arr) { //  функция приобразования строки в масив числе и операндов
        let mas = [...arr]
        let varArr = []
        let Arr = []
        let flag = 0
        let var1 = 0
        let start = 0

        function rec() {
            mas.forEach((el, i) => {

                    if ((el !== '+') && (el !== '-') && (el !== '*') && (el !== '/') && (el !== ')') && (el !== '(') && ((mas.length - 1) !== i)) {
                        Arr.push(el)
                        if (flag===0) {start=i}
                        flag=1
                    } else {
                        if ((el !== '+') && (el !== '-') && (el !== '*') && (el !== '/') && (el !== ')') && (el !== '(') && ((mas.length - 1) === i)) {Arr.push(el)}
                        mas.splice(start,Arr.length, Arr.join(''))
                        flag=0
                        start=0
                     //   rec()
                    }


                    /*     } else {
                    if (varArr.length > 0) {
                        var1 = +varArr.join('')
                        varArr = []
                        Arr.push(var1)
                        var1 = 0
                    }
    
                  /*   if (((mas.length - 1) === i) && ((mas[mas.length - 1] === '+')) || ((mas[mas.length - 1] === '-')) || ((mas[mas.length - 1] === '*')) || ((mas[mas.length - 1] === '/'))) {
                        Arr.push(mas[mas.length - 1])
                    }
                    if (((mas.length - 1) === i)) {
                        varArr.push(el)
                        var1 = +varArr.join('')
                        varArr = []
                        Arr.push(var1)
                        var1 = 0
                    } 
    
                    if ((mas.length - 1) !== i) {
                        Arr.push(el)
                    }  */
                })
                return mas
    }


   

}

function calcString(arr) { //функция считащаяя умножение и деление

    arr.forEach((el, i) => {
        if ((el === '*') || (el === '/')) {
            if (el === '*') {

                if (i === 0) {
                    arr.splice(i, 2, (+arr[i + 1]))
                } else {
                    arr.splice(i - 1, 3, ((+arr[i - 1]) * (+arr[i + 1])))
                }


            }
            if (el === '/') {
                if (i === 0) {
                    arr.splice(i, 2, (+arr[i + 1]))
                } else {

                    arr.splice(i - 1, 3, ((+arr[i - 1]) / (+arr[i + 1])))

                }
            }
            calcString(arr)
        } else {


        }
    })
    return arr
}


function itog(arr) { //функция считащая сложение и вычитание 

    arr.forEach((el, i) => {
        if ((el === '+') || (el === '-')) {
            if (el === '+') {
                if (i === 0) {
                    arr.splice(i, 2, (+arr[i + 1]))
                } else {
                    arr.splice(i - 1, 3, ((+arr[i - 1]) + (+arr[i + 1])))
                }
            }
            if (el === '-') {
                if (i === 0) {
                    arr.splice(i, 2, ((+arr[i + 1])) * (-1))
                } else {
                    arr.splice(i - 1, 3, ((+arr[i - 1]) - (+arr[i + 1])))
                }
            }
            itog(arr)
        } else {


        }
    })

    return arr
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

        if (flag) {
            vArr.push(el)
        }

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

function allCalc(string) { //функцияБ аналог eval() - когда  о ней узнал уже сам написал что то подобное)       
    return itog(calcString(allItog(str(string))))[0]
}
console.log(str('5+55'))

}