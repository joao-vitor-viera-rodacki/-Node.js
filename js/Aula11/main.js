var num = window.document.getElementsByClassName("number")
var text = window.document.getElementById("text")
var output = window.document.getElementById("output")
var cont = 1

console.log(output)
function verifica_entrada(){
    if(cont == 2 ){
        output.innerHTML = ``
    }
    for(c = num[0].value ;c > 0 ;c-- ){
        console.log(text.value)
        
        output.innerHTML += `<p>${text.value}</p>`
        if(c == num[0].value){
            cont = 1
        }
    }    
    cont++
}
