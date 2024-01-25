var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

// Clicando na tab-default - deixando texto ativo
// document.getElementById('tab-default').click();


// Função para midificar as classes das tab's na Section Experiências

// function abrirTab(event, idTab) {
//     var conteudos = document.getElementsByClassName("tabs-conteudo");
//     for (var cont = 0; cont < conteudos.length; cont++) {
//         conteudos[cont].style.display = "none";
//     }

//     var tabs = document.getElementsByClassName("tab-button");
//     for (var cont = 0; cont < tabs.length; cont++) {
//         tabs[cont].className = tabs[cont].className.replace("ativo", "");
//     }

    
//     document.getElementById(idTab).style.display = "block";
//     event.currentTarget.className += " ativo";
// }



