var start = window.document.getElementById("Inicio")
var end = window.document.getElementById("Fim")
var phases = window.document.getElementById("Passo")
var result = window.document.getElementById("resultado")
var tell = window.document.getElementById("contar")

tell.addEventListener("click",tellFunction)

function tellFunction(){
    result.innerHTML = ``
     for(num = Number(start.value) ;num <= Number(end.value) ; num += Number(phases.value) ){
        result.innerHTML += `<p>  Numero ${num} </p>` 
    }
}    