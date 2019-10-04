//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (УТОЧНИТЬ НАСЧЕТ ПРОСТЫХ ЧИСЕЛ)

function f1 (minRange, maxRange) {
    

    let comp = (number) => (minRange-1)/number > 1 && (minRange-1) % number === 0

    console.log('Выводим простые числа из диапазона от ' + minRange + ' до ' + maxRange );
    
    while ((minRange++) <= maxRange) {

       if (((minRange-1) === 1 || comp(2) || comp(3) || comp(5) || comp(7) || comp(9)) === false ) { console.log(minRange-1);}
        
    }
}

