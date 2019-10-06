/* 3. Практикум. Угадай число (БЕЗ ЦИКЛОВ) - рекурсия
Напишем первую игру — «Угадай число». Браузер будет загадывать случайное четырехзначное число, а мы будем отгадывать.
Попытки отгадать число будут идти через диалоговое окно — prompt. Браузер будет сообщать в ответ,
больше или меньше загаданного наш ответ.
Алгоритм будет таким:
Браузер генерирует число и приглашает пользователя к игре.
Выводится окно запроса предположения.
Браузер проверяет число и возвращает результат.
Повторяем до тех пор, пока число не будет угадано.
Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.
Пока не будем ничего выводить на страницу. И пока наш алгоритм далек от совершенства.
 Как только изучим новые возможности языка — сразу улучшим его. */

 // Для консоли

function f3() {

    function genRnd() { // Функция создания случанойго четырехзначного числа
        let rndNumber = (Math.random() * 10000).toFixed();
        if (rndNumber < 1000) {
            genRnd()
        } else {
            return rndNumber;
        }
    }

    let rndNumber = +genRnd()

    let str1 = 'Игра угадайте четырехзначное число. Введите число'
    let str = str1
    let test = 0;

    function guessNuber() { // Основаня функция игры. 
        let test = +prompt(str)
        let str2 = 'Чсило ' + test + ' меньше случаного числа, введите новое, если надоест гадать введи ' + rndNumber
        let str3 = 'Чсило ' + test + ' больше случаного числа, введите новое, если надоест гадать введи ' + rndNumber
        if (test < rndNumber) {
            str = str2
            guessNuber();
        }
        if (test > rndNumber) {
            str = str3
            guessNuber();
        }
        if (test === rndNumber) {
            alert('Красавчик!!! Число ' + test + ' верное')
        }
    }

    guessNuber()

}

// Для HTML

function genRnd() { // Функция создания случанойго четырехзначного числа
   
    let rndNumber = (Math.random() * 10000).toFixed();
    if (rndNumber < 1000) {
        genRnd()
    } else {
        return rndNumber;
    }
}

let rndNumber = +genRnd();
let div = document.getElementById('out');

let myScript3 = () => {

    let numb = document.getElementById('Number').value
    document.getElementById('Number').value = '';
    if (!isNaN(numb)) {

        function guessNuber() { // Основаня функция игры. 
            number = numb;

            if (number < rndNumber) {
                div.innerHTML = 'Чсило ' + number + ' меньше случаного числа, введите новое'
                return
            }
            if (number > rndNumber) {
                div.innerHTML = 'Чсило ' + number + ' больше случаного числа, введите новое'
                return
            }
            if (number == rndNumber) {
                div.innerHTML = 'Красавчик!!! Число ' + number + ' верное'
                rndNumber = +genRnd();
                return
            }
        }

        guessNuber()
    } else {
        div.innerHTML = 'Значение ' + number + 'некорректно'

    }

}

let myScriptHelp=() => div.innerHTML = 'Случаное число равно ' + rndNumber