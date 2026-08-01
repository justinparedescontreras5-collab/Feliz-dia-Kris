//======================================
//      REPRODUCIR MÚSICA
//======================================

const musica = document.getElementById("musica");

const botonMusica = document.getElementById("musicaBtn");

let reproduciendo = false;

botonMusica.addEventListener("click",()=>{

    if(!reproduciendo){

        musica.play();

        botonMusica.innerHTML="⏸️ Pausar música";

        reproduciendo=true;

    }

    else{

        musica.pause();

        botonMusica.innerHTML="🎵 Reproducir música";

        reproduciendo=false;

    }

});

//======================================
//          CARTA
//======================================

const carta=document.getElementById("carta");

const abrir=document.querySelector(".boton");

const cerrar=document.getElementById("cerrarCarta");

abrir.addEventListener("click",()=>{

    carta.style.display="flex";

});

cerrar.addEventListener("click",()=>{

    carta.style.display="none";

});
