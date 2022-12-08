function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("foto")
    var body = window.document.getElementById("body")
    var data = new Date()
    var hora =  21//data.getHours()

    // console.log(hora > 12)
    msg.innerHTML = `Agora sao ${hora } horas`
    if (hora >= 0 && hora <= 12){
        img.innerHTML = `<img src="img/manha.jpg" alt="">`    
        body.style.background =  "white"
    } 
    if(hora > 12 && hora < 18){
        body.style.background =  "rgb(217, 191, 191)"
        img.innerHTML = `<img src="img/tarde.jpg" alt="">`    
    }
    if(hora >= 18 && hora <= 24){
        body.style.background = "rgb(34, 30, 30)"
        img.innerHTML = `<img src="img/noite.jpg" alt="">`    
    }
}