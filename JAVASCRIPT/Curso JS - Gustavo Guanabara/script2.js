function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value)>ano){
        window.alert('Erro - Tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade>0){
                img.setAttribute('src','morning.jpeg')
            }
        } else if (fsex[1].checked){
            gênero = "Mulher"
            if(idade>0){
                img.setAttribute('src','tarde.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}

function contar(){
    let inicio = document.getElementById('inicio')
    let passo = document.getElementById('passo')
    let final = document.getElementById('final')
    let resultado = document.getElementById('resultado')
    if (inicio.value.length==0 || passo.value.length==0 || final.value.length==0){
        window.alert('ERRO - FALTAM DADOS')
    }
    else{
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(final.value)
        for(c=i;c<=f;c+=p){
            resultado.innerHTML += `${c} `
        }
        }
}
function tabuada(){
    var num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if(num.value.length==0){
        window.alert('Insira Algo!')
    }
    else{
        var n=Number(num.value);
        let c =1;
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=200){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if (l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            if (valores[pos]>maior)
                maior=valores[pos]
            else if(valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.<p/>`
        res.innerHTML += `<p>${maior} é o maior valor e ${menor} é o menor</p>`
    }
}
