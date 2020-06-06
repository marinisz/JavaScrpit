
function ajax() {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest;
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var tela = document.querySelector('div#tela');
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
        }

        texto = xmlHttp.responseText
        tela.innerHTML = `${texto}`
    }

    xmlHttp.open('GET', 'arquivo.txt', true);
    xmlHttp.send();

}
var pageCounter = 1;
var animalContainer = document.getElementById('tela')
var btn = document.getElementById("btn");

btn.addEventListener("click", function (){
        var pega;
        if (window.XMLHttpRequest) {
            pega = new XMLHttpRequest;
        } else {
            pega = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //let tela = document.querySelector('div#tela');
        pega.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
        pega.onload = function () {
            if (pega.status>= 200 && pega.status <400){
            var ourdata = JSON.parse(pega.responseText);
            renderHTML(ourdata);
            }else{
                console.log("We connected but it returned an error")
            }
        }
        pega.onerror = function(){
            console.log("Connection error");
        }
        pega.send()
        pageCounter++;
        if (pageCounter > 3){
            btn.classList.add("hide-me");
        }
});
function renderHTML(data){
    var htmlString = "";
    for(i=0;i<data.length;i++){
        htmlString+= "<p>" + data[i].name + "is a " + data[i].species + "that likes to eat ";
        for(ii=0;ii<data[i].foods.likes.length;ii++){
            if(ii == 0){
                htmlString+= data[i].foods.likes[ii]
            }else{
                htmlString+= " and " + data[i].foods.likes[ii]
            }
        }
        htmlString += ".</p>"
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}