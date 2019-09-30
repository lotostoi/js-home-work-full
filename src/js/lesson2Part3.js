/* Задание: Объявить две целочисленные переменные a и b и задать им произвольные 
начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

let NamberTask = + prompt(' Введите номер проверямого задания \n 1. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу: \n если a и b положительные, вывести их разность; \n если а и b отрицательные, вывести их произведение; \n если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.\n  2. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. (НИКАКИХ ЦИКЛОВ) \n 3. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. \n И реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций и вернуть полученное значение (использовать switch). \n 4. *Сравнить null и 0. Попробуйте объяснить результат. \n 5. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.')

function jstask1() {
    var a = +prompt('Введите значние переменной а')
    var b = +prompt('Введите значние переменной b')
    if (a >= 0 && b >= 0) { console.log('a и b положительные, выводим их разность. Она равна  ' + (a - b)) }
    if (a < 0 && b < 0) { console.log('a и b отрицательные, выводим их произведение. Она равна  ' + (a * b)) }
    if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) { console.log('a и b имеют разные знаки, выводим их сумму. Она равна  ' + (a + b)) }
}

function jstask2() {
    let namberForSwitch = +prompt(' Введите число от 0 до 15')
    let textForSwitch = 'Выводим числа от ' + namberForSwitch + ' до 15:  '
    switch (namberForSwitch) {
        case 0: console.log(textForSwitch + '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 1: console.log(textForSwitch + '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 2: console.log(textForSwitch + '2 3 4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 3: console.log(textForSwitch + '3 4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 4: console.log(textForSwitch + '4 5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 5: console.log(textForSwitch + '5 6 7 8 9 10 11 12 13 14 15')
            break;
        case 6: console.log(textForSwitch + '6 7 8 9 10 11 12 13 14 15')
            break;
        case 7: console.log(textForSwitch + '7 8 9 10 11 12 13 14 15')
            break;
        case 8: console.log(textForSwitch + '8 9 10 11 12 13 14 15')
            break;
        case 9: console.log(textForSwitch + '9 10 11 12 13 14 15')
            break;
        case 10: console.log(textForSwitch + '10 11 12 13 14 15')
            break;
        case 11: console.log(textForSwitch + '11 12 13 14 15')
            break;
        case 12: console.log(textForSwitch + '12 13 14 15')
            break;
        case 13: console.log(textForSwitch + '13 14 15')
            break;
        case 14: console.log(textForSwitch + '14 15')
            break;
        case 15: console.log(textForSwitch + '15')
            break;
        default: console.log(namberForSwitch + ' лежит за пределами указанного диапазона(0..15) или не явлется числом');
    }
}

function addition(a, b) { return a + b }       //функция сложения
function sbtraction(a, b) { return a - b }     //функция вычитания
function multiplication(a, b) { return a * b } //функция умножения
function division(a, b) { return a / b }       //функция деления

function outPut(operation, arg1, arg2) {   //Функция с тремя переменными
    switch (operation) {
        case 'сложение': console.log('Сумма введенных значнией равана  ' + addition(arg1, arg2));
            break;
        case 'вычитание': console.log('Разность введенных значнией равана  ' + sbtraction(arg1, arg2));
            break;
        case 'умножение': console.log('Произведение введенных значнией равано  ' + multiplication(arg1, arg2));
            break;
        case 'деление': console.log('Результат деления введенных значнией равен  ' + division(arg1, arg2));
            break;
        default: console.log('Команда ' + operation + ' не верна, выедите одну из следующих комнад:сложение, вычитание, умножение, деление')
    }
}

//outPut(operation, arg1, agr2)

function jstask3() {
    let firstVariable = +prompt('Введите значние a');
    let secondVariable = +prompt('Введите значние b');
    let namberOperation = prompt('Ведите оперции которую вы хотите выполнить \n сложение \n вычитание \n умножение \n деление')

    if (namberOperation === 'сложение' || namberOperation === 'вычитание' || namberOperation === 'умножение' || namberOperation === 'деление') {
        outPut(namberOperation, firstVariable, secondVariable)
    }
    else { console.log('Вы ввели неправильную команду' + namberOperation + ', Введите одну из следующих комнад:сложение, вычитание, умножение, деление') }
}


function jstask4() {
    console.log('Реузльтат сравнения null и 0: \n null > 0 = false, \n null < 0 = false, \n null == 0 = false,\n null === 0 = false \n Объяснение реузьтата: 0 это определенная величина, Null \n неопределенная величина или нечего, эти величны нельзя сравнивать, \n поэтому результат их сравнения всегда будет двать ложь')
}


function power(val, pow) {
    var namber = val;
    var rethalt=rethalt*val;
    if (pow != 0) {
        rethalt = namber * power(val, pow - 1);
     
    };

    return namber;

}

function jstask5() {
    let namber = +prompt('Введите число для возвдения в степень');
    let sub = +prompt('Введите степень');
    console.log(namber + ' в степени ' + sub + ' равно ' + power(namber, sub))
}


switch (NamberTask) {
    case 1: jstask1();
        break;
    case 2: jstask2();
        break;
    case 3: jstask3();
        break;
    case 4: jstask4();
        break;
    case 5: jstask5();
        break;
    default: console.log('Задния под номером ' + NamberTask + ' не существет!');

}


