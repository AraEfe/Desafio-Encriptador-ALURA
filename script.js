function encriptar(){
    var texto = document.getElementById("textoEncriptado").value.toLocaleLowerCase();
    var textoCifrado = texto.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado.replace(/o/igm, "ober");
    var textoCifrado = textoCifrado.replace(/i/igm, "imes");
    var textoCifrado = textoCifrado.replace(/a/igm, "ai");
    var textoCifrado = textoCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto-debajo-imagen").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textoCifrado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("textoEncriptado").value.toLocaleLowerCase();
    var textoCifrado = texto.replace(/enter/igm, "e");
    var textoCifrado = textoCifrado.replace(/ober/igm, "o");
    var textoCifrado = textoCifrado.replace(/imes/igm, "i");
    var textoCifrado = textoCifrado.replace(/ai/igm, "a");
    var textoCifrado = textoCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto-debajo-imagen").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textoCifrado;    
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("cut");
    alert("Copiado!");
}