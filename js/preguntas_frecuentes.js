const preguntas_frecuentes = document.querySelectorAll(".preguntas .content-pregunta");

preguntas_frecuentes.forEach(pregunta => {
    pregunta.addEventListener('click', (element) => {

        element.currentTarget.classList.toggle("activa");

        const respuesta = get_respuesta(pregunta);
        const altura_real_respuesta = respuesta.scrollHeight;

        if(!respuesta.style.maxHeight){
            respuesta.style.maxHeight = altura_real_respuesta + "px";
        }else{
            respuesta.style.maxHeight = "";
        }

        preguntas_frecuentes.forEach( (p) => {
            if(p != pregunta){
                p.classList.remove("activa");
                get_respuesta(p).style.maxHeight = "";
            }
        });

    });
});

function get_respuesta(pregunta){
    return pregunta.querySelector(".respuesta");
}

