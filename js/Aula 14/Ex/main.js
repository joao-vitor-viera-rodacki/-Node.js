var num =  window.document.getElementById("numero")
var cont = window.document.getElementById("contar")
var select = window.document.getElementById("select")
var mediaButton = window.document.getElementById("media")
var finish = window.document.getElementById("finaliza")


cont.addEventListener("click",addNum)
mediaButton.addEventListener("click",mediaNum)

var list = []

function addNum(n=0){
    
    var quantlength = num.value.length
    var numero = Number(num.value)
    if (quantlength == 0 || numero > 100 || numero < 0 ){
        return window.alert("Digite Um numero valido")
    }else{
        list.push(numero)
        var indice = list.indexOf(numero)
        var item = document.createElement("option")
        item.text = `O numero ${numero} : indice ${indice}`
        item.value = `indice${indice}`
        select.appendChild(item)
        
        return mediaNum(false)
    }
}
function mediaNum(limpa=true){
    if (limpa){
        quant = list.length
        lastNum = list[quant-1]
        var Mnum = maiorNum()

        finish.innerHTML += `<p>Quantidade de numero e ${quant}</p>`
        finish.innerHTML += `<p>O ultimo numero e ${lastNum}</p>`
        finish.innerHTML += `<p>O maior numero e ${Mnum}</p>`

    }else{
        finish.innerHTML = ``
    }
}
function maiorNum(){
    var Mnum = 0
    for(var contagem in list){
        console.log("passei")
        console.log(list[contagem])
        // if(list[contagem] > Mnum){
        //     Mnum = list[contagem]
        //     console.log(list[contagem],Mnum)}
    }
    return Mnum
}
//Terminar o numero maior
//arrumar os indices