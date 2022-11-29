var date = new Date()
var horas = date.getHours()

if (horas < 3){
    console.log(`Boa madrugada , agora sao ${horas} horas`)
} else if(horas < 12 ){
    console.log(`Bom dia agora sao ${horas} horas`)
}else if(horas < 18 ){
    console.log(`Boa tarde agora sao ${horas} horas`)
}else if(horas < 24){
    console.log(`Boa Noite agora sao ${horas} horas`)
}