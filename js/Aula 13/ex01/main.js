var start = window.document.getElementById("Inicio")
var end = window.document.getElementById("Fim")
var phases = window.document.getElementById("Passo")
var result = window.document.getElementById("resultado")
var tell = window.document.getElementById("contar")

tell.addEventListener("click",tellFunction)

function tellFunction(){
    if(start.value.length == 0 || end.value.length == 0 || phases.value.length == 0){
        result.innerHTML = "impossivel contar"
    }else{
        if(phases.value == 0 ){
            window.alert("Passo foi mudado para 1")
            phases.value = 1
        }
        result.innerHTML = "Contando <br>"
        if(start.value > end.value){
            for(var num = Number(start.value) ;num >= Number(end.value) ; num -= Number(phases.value) ){
                result.innerHTML += ` ${num} `
            } 
        }else{
            for(var num = Number(start.value) ;num <= Number(end.value) ; num += Number(phases.value) ){
                result.innerHTML += ` ${num} ` 
            }
            }}
}    