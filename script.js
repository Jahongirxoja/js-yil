let name = prompt('ismingizni kiriting')
let age = +prompt('yilingizni kiriting')
let years = +prompt('hozirgi yilni kiriting')


function nom(a, b, v){
    let nn = 'sizning ismingiz ' + a + '. yoshingiz ' + (b - v)

    return nn
}


let javob = nom(name,years,age)


alert(javob)


















// function random(min, max){
//     return Math.floor(Math.random() * (max - min +1) +min)
// }


// for ( let i= 0; i< amount; i++ ) {
//     let exnum1 = random(min1, min2)
//     let exnum2 = random(min1,min2)




//    let symbol = random(1,4)
   
//    answer = 0

//    let Symbol = ''

//    if(symbol === 1) {
//       answer = exnum1 + exnum2
//       Symbol = ' + '
//    }else if(symbol === 2){
//        answer =exnum1 - exnum2
//        Symbol = ' - '
//    }else if(symbol === 3){
//        answer = exnum1 * exnum2
//        Symbol = ' * '
//    }else if(symbol === 4){
//     answer =exnum1 / exnum2
//        Symbol = ' / '
//    }

//     let pr = exnum1 + Symbol + exnum2

//     let userPr = +prompt(pr)
//     let isExample = userPr === answer ? 'sizning javob togri ' + userPr : 'sizning javob notogri ' + userPr + 'togri javob ' +answer 


//     console.info(pr + ' : ' +isExample)

// }
