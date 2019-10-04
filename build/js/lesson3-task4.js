/* 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */


function f4 () {
    
    let numberRows=+prompt(' Введите количество слоев пирамиды!')
 
    function building() {
        let arr = [];
        
        while ( numberRows-- != 1)
        { console.log(arr.push('x'))
        }

    }

    building()

}
