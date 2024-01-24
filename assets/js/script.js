var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"

})

function abrirTab(idTab){
    var conteudos = document.getElementsByClassName('tabs-conteudo')
    
    for (var cont = 0; cont < conteudos.length; cont++) {
        console.log(i);

    }

    document.getElementById(idTab).style.display = 'block';
}