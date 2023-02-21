// Aprendendo sofre vateres var
let valores  = [0,1,0,2]
console.log(valores)
//Adicionando valores no ultimo indice do vetor
valores.push(9)
console.log(valores)
//Mostrando quantidade de indices em um vetor
console.log(valores.length)


// Fazendo Listagem dos valores de vetor
// for(cont = 0 ;cont < valores.length ; cont++){
//     console.log(`O valor do indice ${cont} e ${valores[cont]}`)
// }
// Segunda maneira de caminha por vetor
// for(var pos in valores){
//     console.log(valores[pos])
// }

//Encontrando certo valor dentro de um vetor
var num =  valores.indexOf(2)
if(num == -1){
    console.log(`O valor 2 nao foi encontrado`)
}else{
    console.log(`O valor 2 esta na posicao ${num}`)
}
//recursividade
function fatorial(n=0){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))