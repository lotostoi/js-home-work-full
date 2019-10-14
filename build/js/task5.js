function calc() {


    contDinPage.className = 'calc'

    let arrButtons = [
        ['number', 'number', '0' , '0'],
        ['number', 'number', '1' , '1'],
        ['number', 'number', '2' , '2'],
        ['number', 'number', '3' , '3'],
        ['number', 'number', '4' , '4'],
        ['number', 'number', '5' , '5'],
        ['number', 'number', '6' , '6'],
        ['number', 'number', '7' , '7'],
        ['number', 'number', '8' , '8'],
        ['number', 'number', '9' , '9'],
        ['point', 'point', 'point' , '.'],
        ['opereation', 'opereation', '-' , '-'],
        ['opereation', 'opereation', '+' , '+'],
        ['opereation', 'opereation', '*' , '*'],
        ['opereation', 'opereation', '/' , '/'],
        ['opereation', 'opereation', '=' , '='],
        ['opereation', 'opereation', 'clean' , 'C'],
    ]


    contDinPage.innerHTML = `
    <div class="bodyCalc">
    <div class="wind"></div>
    </div>
    `
    arrButtons.forEach((el,i) => {
       d.querySelector('.bodyCalc').innerHTML += `<button class="${el[0]}" data-${el[1]}="${el[2]}" >${el[3]}</button>`
    })



}