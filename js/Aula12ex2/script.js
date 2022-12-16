var sex  = window.document.getElementsByName("radsex")
var but = window.document.getElementById("but")
var idade_ano = window.document.getElementById("idade")
var res = window.document.getElementById("resposta")
var img = window.document.getElementById("img")
var data = new Date()
var ano = data.getFullYear()

but.addEventListener("click", verifica_idade)

// console.log(idade.value)
// console.log(sex)
// console.log(sex[1].checked)
// console.log(sex[0].checked
// img.setAttribute("src","endereco")
// res.appendChild(img)

function verifica_entrada(size ,value){
    value = Number(value)
    if (size < 4 || value == NaN || value > ano){
        return false
    }else {
        return true
    }

}
function verifica_idade(){
    ida = idade_ano.value
    size = idade_ano.value.length
    console.log(ida,size)
    veri = verifica_entrada(size,ida)

    if(veri){
        if (sex[0].checked == true){
            
            var idade = verifica_sexo(ida,"homem")
            
            res.innerHTML = `<p>homem idade ${idade}</p>`
        

        }else if(sex[1].checked == true){
            var idade = verifica_sexo(ida,"mulher")
            res.innerHTML = `<p>Mulher ; idade ${idade}</p>`
            
        }
    }else{
        return alert("digite novamente")
    }}

function verifica_sexo(ida_ano,sexo){
    idade =   ano - ida_ano
    console.log(idade)
    if (idade <= 12 && idade > 0){
        if (sexo == "homem"){
            img.src = "img/menino.jpg"
            return idade
        }else{
            img.src = "img/menina.jpg"
            return idade
        }

    }else if(idade > 12 && idade <= 50){
        if (sexo == "homem"){
            img.src = "img/homem.jpg"
            return idade

        }else{
            img.src = "img/mulher.jpg"
            return idade

        }
    }else if(idade > 50 && idade > 100){
        if (sexo == "homem"){
            img.src = "img/velho.jpg"
            return idade

        }else{
            img.src = "img/velha.jpg"
            return idade
        }
    }
}