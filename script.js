const musica = document.getElementById("musica");

const boton = document.getElementById("musicaBtn");

boton.addEventListener("click", async () => {

    try{

        await musica.play();

        alert("La música empezó correctamente.");

    }

    catch(error){

        alert("Error: " + error.message);

        console.log(error);

    }

});
