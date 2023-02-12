import tellFunction from "./main";

var resul = window.document.getElementById("result2")
const number = tellFunction()

function writeDoc(){
    for(cont = 0;cont >= 10;cont++){
        var equa = number * cont
        resul.innerHTML += `<p>${number} X ${cont} = ${equa}</p>`
    }
}