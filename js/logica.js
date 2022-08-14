var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".copiar");

var textResultado = document.querySelector(".texto-copiar")

var munheco = document.querySelector(".img-muneco");
var tituloMunheco = document.querySelector(".titulo-h3");
var parrafoMunheco = document.querySelector(".texto-seccion2");


var textoIngresado = document.querySelector(".texto-ingresado")

textoIngresado.focus();


function limpiarTexto(){

   textoIngresado.value = ("");

}


function recuperarTexto(){

    return textoIngresado.value;

}



function encriptar(){

    ocultarMunheco();
    var resultadoTexto = recuperarTexto()
    textResultado.textContent = textoEncriptado(resultadoTexto);  
    limpiarTexto(); 
   
    
}

function desencriptar(){

    ocultarMunheco();
    var resultadoTexto = recuperarTexto()
    textResultado.textContent = textoDesencriptar(resultadoTexto);
    limpiarTexto();

}



function ocultarMunheco(){

    munheco.classList.add("ocultar");
    tituloMunheco.classList.add("ocultar");
    parrafoMunheco.classList.add("ocultar");

}


function textoEncriptado(encriptar){

    var texto = encriptar
    var textoFinal = ""

    for(var i=0 ; i < texto.length; i++ ){
        
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }

        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }

        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }

         else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
              
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }

        else{
            textoFinal = textoFinal + texto[i]
        }

    }
    return textoFinal;
}


function textoDesencriptar(desenciptar){

    var texto = desenciptar
    var textoFinal = ""

    for(var i=0 ; i < texto.length; i++ ){ 
        
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i + 1
        }

        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4
        }

        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3
        }
       
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3
        }
        
        else{
            textoFinal = textoFinal + texto[i]

        }

    }
    return textoFinal;


}


function copiar (){


    var copiar = textResultado.textContent
    navigator.clipboard.writeText(copiar)
    
}





botonEncriptar.onclick = encriptar;

botonDesencriptar.onclick = desencriptar;

botonCopiar.onclick = copiar;

