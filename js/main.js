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