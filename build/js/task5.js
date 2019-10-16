function obj() {


    contDinPage.className = 'obj'
    contDinPage.innerHTML = `
    <div class="contObj">
    <h3 calss="contObj__h1">Задание: написать функцию для получения всех данных объекта </h3>
    <p calss="contObj__p"> 
    <pre> 
    outArr = []
    let i = 0

    function objectTraversal(arr) {
        for (const key in arr) {
            outArr.push(arr[key])
            if (typeof (arr[key]) === 'object') {
                objectTraversal(arr[key])
            }
        }
        return outArr
    }
    </pre>
    </p>
    <p calss="contObj__p"> Результат работы функции выведен в консоли.</p> 
    </div>
    `


    outArr = []
    let i = 0

    function objectTraversal(arr) {
        for (const key in arr) {
            outArr.push(arr[key])
            if (typeof (arr[key]) === 'object') {
                objectTraversal(arr[key])
                //  setTimeout(function () { objectTraversal(arr[key]) }, 0);

            }
        }
        return outArr
       
    }



   let Obj1 = {
        row1: [{
            t1: 1,
            t3: 3,
            t4: 4,
            t5: 5,
            t2: {
                test: 5,
                max: 20
            }
        }],
        row2: [{
            t4: 4,
            t5: 5,
            t2: {
                dfd: 5,
                sdfd: 20
            }
        }],
        row3: [{
            t1: 1,
            t3: {
                rr: 6,
                ww: 230
            },
            t4: 4,
            t5: 5,
            t2: {
                hh: '44',
                ll: 'tt'
            }
        }],
        row4: [{
            t1: 1,
            t3: 3,
            t4: 4,
            t5: 5,
            t2: {
                test: 5,
                max: 20
            }
        }],
        row5: [{
            t1: 1,
            t3: 3,
            t4: 4,
            t5: 5
        }]
    }


    let Obj2 = {
        a1: {
            b1: {
                c: 1
            },
            b2: {
                c: 222
            },
            b3: {
                c: {
                    d: 33,
                    e: 2.5,
                    f: {
                        g: 9999,
                        h: {
                            i: {
                                j: 1001,
                                k: 'строка',
                                l: [1, 2, 3]
                            }
                        }
                    }
                }
            }
        }
    }

    
    console.log( 'Обект1')
    console.log( Obj1)
    console.log( 'Обход обекта 1')
    console.log( objectTraversal(Obj1))
    outArr=[]
    console.log( '***************************************************************************')
    console.log( 'Обект2')
    console.log( Obj2)
    console.log( 'Обход обекта 2')
    console.log( objectTraversal(Obj2))
  
}