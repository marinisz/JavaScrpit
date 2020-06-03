
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