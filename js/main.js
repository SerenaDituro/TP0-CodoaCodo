let ubicacionPrincipal = window.pageYOffset; 

    AOS.init();

/*let numeroPixel = 2000;*/
window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; 
    if(ubicacionPrincipal >= desplazamientoActual){ 
        document.getElementsByTagName("header")[0].style.top = "0px"
    }else{
        /* if(desplazamientoActual >= numeroPixel){
            document.getElementsByTagName("header")[0].style.top = "-100px"
        } */
        document.getElementsByTagName("header")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; 
})

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

    /* Asunto */
    if (document.fcontacto.asunto.selectedIndex == 0) {
        alert("Falta seleccionar el asunto del mensaje")
        document.fcontacto.asunto.focus()
        return 0;
    }

    /* Mensaje */
     if (document.fcontacto.mensaje.value.length == 0) {
        alert("Falta escribir el mensaje")
        document.fcontacto.mensaje.focus()
        return 0;
    }
}