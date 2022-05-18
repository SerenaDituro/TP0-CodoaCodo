/* Desplazamiento del header */
let ubicacionPrincipal = window.pageYOffset; 

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; 
    if(ubicacionPrincipal >= desplazamientoActual){ 
        /* el header aparece y desaparece en todas las páginas, salvo en inicio.html */
        document.getElementsByClassName("header-pag")[0].style.top = "0px"
    }else{
        document.getElementsByClassName("header-pag")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; 
})

/* Transición: cambio de color */
function cambiar_color (div) {
	div.style.background = 'rgb(25, 43, 121)';
    div.style.border = 'white 1.5px dotted';
}

function volver_color (div) {
	div.style.background = '';
    div.style.border = '';
}

/* Validación de formulario */
function validacion_al_enviar_datos() {
    /* Nombre */
    if (document.fcontacto.nombre.value.length == 0) {
        alert("Falta escribir el nombre")
        document.fcontacto.nombre.focus()
        return 0;
    }

    /* Apellido */
    if (document.fcontacto.apellido.value.length == 0) {
        alert("Falta escribir el apellido")
        document.fcontacto.apellido.focus()
        return 0;
    }

    /* Email */   
    if (document.fcontacto.email.value.length == 0) {
        alert("Falta escribir el email")
        document.fcontacto.email.focus()
        return 0;
    }     

    /* Mensaje */
     if (document.fcontacto.mensaje.value.length == 0) {
        alert("Falta escribir el mensaje")
        document.fcontacto.mensaje.focus()
        return 0;
    }
}
