const envelope = document.getElementById("envelope");
const button = document.getElementById("openBtn");

function abrirCarta() {

    envelope.classList.toggle("open");

    if(envelope.classList.contains("open")){
        button.innerHTML = "Fechar carta 💌";
    }else{
        button.innerHTML = "Abrir carta 💌";
    }

}

button.addEventListener("click", abrirCarta);

envelope.addEventListener("click", abrirCarta);
