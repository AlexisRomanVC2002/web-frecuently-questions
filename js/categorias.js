const categorias = document.querySelectorAll('.categoria');
const contenedor_preguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach( (categoria) => {
    categoria.addEventListener('click', (element) =>{

        categorias.forEach( (elemento) => {
            elemento.classList.remove('activa');
        } );

        element.currentTarget.classList.toggle('activa');
        categoriaActiva = categoria.dataset.categoria;

        // Activamos el contenedor de preguntas que corresponde

        contenedor_preguntas.forEach( (contenedor) => {
            if(contenedor.dataset.categoria == categoriaActiva){
                contenedor.classList.toggle('activa');
            }else{
                contenedor.classList.remove('activa');
            }
        } );
    });
} );