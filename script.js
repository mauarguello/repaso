/*e--> enter
o--> ober
i-->imes
a--> ai
u--> ufat*/

function encriptar() {
    //i es para que afecte tanto minuscula como mayuscula 
    //m es para toda la linea u oracion 
    //g es para que afecte multiples lineas o parrafo
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    // Ocultar elementos innecesarios
    document.querySelector(".muñeco").style.display = "none";
    document.querySelector(".texto-bold").style.display = "none";
    document.getElementById("texto2").value = txtCifrado;

    // Mostrar botón de copiar
    document.querySelector(".copy").style.display = "block";
}

function desencriptar() {
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    // Ocultar elementos innecesarios
    document.querySelector(".muñeco").style.display = "none";
    document.querySelector(".texto-bold").style.display = "none";
    document.getElementById("texto2").value = txtCifrado;

    // Mostrar botón de copiar
    document.querySelector(".copy").style.display = "block";
}

function copy() {
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
}
