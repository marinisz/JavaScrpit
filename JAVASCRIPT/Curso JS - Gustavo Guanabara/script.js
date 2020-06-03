function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (minutos<10){
        minutos= "0"+minutos
    }
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if(hora >= 0 && hora <12){
        //bom dia!
        img.src="morning.jpeg"
        document.body.style.background="#e2cd9f"
    }
    else if (hora>=12 && hora <18){
        img.src="tarde.jpeg"
        document.body.style.background="#b98a6f"
    }
    else{
        img.src="noite.jpeg"
        document.body.style.background="#515154"
    }
}

