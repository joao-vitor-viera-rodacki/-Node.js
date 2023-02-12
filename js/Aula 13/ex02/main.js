var number = window.document.getElementById("numero")
var tell = window.document.getElementById("contar")
var select = window.document.getElementById("select")
tell.addEventListener("click",tellFunction)

function tellFunction(){
    number2 = Number(number.value)
    if(number.value.length == 0 ){
        window.alert("Digite um numero")
    }else{
        select.innerHTML = ``
        for(cont = 0;cont <= 10; cont++){
            let item = document.createElement('option')
            item.text = `${number2} x ${cont} = ${number2*cont}`
            item.value = `tab${cont}`
            select.appendChild(item)

        }
    }
}    