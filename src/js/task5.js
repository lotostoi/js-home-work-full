

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




    function str(arr) {
        let startSk = 0 //индикатор начала скобки
        let mas = [...arr]
        let varArr = []
        let count = 0
        let opereation = ''
        let var1 = 0
        number = +0
        mas.forEach((el, i) => {
           // if (i === mas.length) {console.log(var1+' rrr')}
           
            if ((el !== '+')&&(el !== '-')&&(el !== '*')&&(el !== '/')) {
                varArr.push(el)
                console.log(el)
            }
            else {
                if (count < 1) {
                    var1 = +varArr.join('') 
                    console.log('var1= '+ var1)
                    varArr=[]                  
                    count++
                    console.log(count)
                }  else {
                    switch (el) {
                        case '-': var1 = var1 - (+varArr.join())
                        console.log('-')
                            break
                        case '+': var1 = var1 + (+varArr.join())
                        console.log('+  o'+ var1  )
                            break
                        case '*': var1 = var1 * (+varArr.join())
                        console.log('*')
                            break
                        case '/': var1 = var1 / (+varArr.join())
                        console.log('/')
                            break
                        default: console.log ('Good')
                       
                    }
                    varArr=[] 
                    return   console.log('/' + var1)
                } 

            }


        })

    }

  str('44+6') 


}

