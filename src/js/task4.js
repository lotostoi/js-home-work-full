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
            try {
                if (eval(var1) === Infinity) {
                    win.innerHTML = `<span style='color:rgb(139, 27, 42); font-weight: 400'>  Деление на 0!!  </span>`
                } else {
                    win.innerHTML = eval(var1)
                }
            }catch (err) {

                win.innerHTML = `<span style='color:rgb(139, 27, 42); font-weight: 400'>  Это не посчитать!!!  </span>`
              
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

}