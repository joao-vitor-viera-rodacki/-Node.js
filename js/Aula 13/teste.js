// while(condicao){
    // codigo
// }

// do{
    // codigo
// }while(condicao)
// c = 10
// while(c != 0){
//     console.log(`Agora ${c}`)
//     c--
//     // if(c == 5){
//     //     console.log(`metade ${c}`)
//     // }
// }

var i = 10
var f = 1
var p = 2

console.log(1 > i)
if(i == 0 || f == 0 || p == 0){
    console.log("impossivel contar")
}else{
      for(num = i ;num > f ; num -= p ){
            console.log(`<p>  Numero ${num} </p>`)
        }    
    }
        // for(var num = i ;num <= f ; num += p ){
        //     console.log(`<p>  Numero ${num} </p>` )
        // }
        // }}