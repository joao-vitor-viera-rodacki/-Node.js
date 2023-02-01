var start = window.document.getElementById("Inicio")
var end = window.document.getElementById("Fim")
var phases = window.document.getElementById("Passo")
var result = window.document.getElementById("resultado")
var tell = window.document.getElementById("contar")

tell.addEventListener("click",tellFunction)

function tellFunction(){
    for(num = start.value ;num >= end.value ; num + phases.value ){
        console.log(num)
    }
}