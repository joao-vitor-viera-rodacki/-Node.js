var sex  = window.document.getElementsByName("radsex")
var but = window.document.getElementById("but")
var idade_ano = window.document.getElementById("idade")
var res = window.document.getElementById("resposta")
var img = window.document.getElementById("img")
var data = new Date()
var ano = data.getFullYear()

but.addEventListener("click", verifica_sexo)

// console.log(idade.value)
// console.log(sex)
// console.log(sex[1].checked)
// console.log(sex[0].checked)

console.log(ano)
function verifica_sexo(){
    idade_ano = idade_ano.value
    console.log(idade_ano)
    if (sex[0].checked == true){
        var idade = verifica_idade(idade_ano)
        res.innerHTML = `<p>homem idade ${idade}</p>`
        img.src = "img/homem.jpg"
        return

    }else if(sex[1].checked == true){
        img.src = "img/mulher.jpg"
        console.log("mulher")
    }}

function verifica_idade(ida_ano){
    console.log(ida_ano)

    idade =   ano - ida_ano
    return idade
}