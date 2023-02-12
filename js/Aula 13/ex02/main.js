var number = window.document.getElementById("numero")
var tell = window.document.getElementById("contar")
var numero = Number(number.value)

tell.addEventListener("click",tellFunction)

function tellFunction(){
    return numero
}    
export default tellFunction;