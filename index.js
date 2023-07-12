document.getElementById("mainButton").addEventListener("click", function() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});


function activarModoNocturno() {
  document.body.classList.toggle("modo-nocturno");
}


function duplicarTamano() {
  document.body.classList.toggle("duplicar");
}


var lecturaActiva = false;
var voz;
 function toggleLecturaPagina() {
  if (lecturaActiva) {
    detenerLectura();
  } else {
    iniciarLectura();
  }
}
 function iniciarLectura() {
  var texto = document.body.innerText;
  voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-ES";
  voz.pitch = 1;
  voz.rate = 1;
  speechSynthesis.speak(voz);
  lecturaActiva = true;
}
 function detenerLectura() {
  speechSynthesis.cancel();
  lecturaActiva = false;
}


 function mostrarMensaje() {
    alert("¡Hola! ING Sandra aun este proyecto no cuenta con la construccion del backend RTA.equipo de desarrollo CODELOGY");
}
 function toggleCategorias() {
        var subcategorias = document.querySelectorAll(".subcategorias");
        subcategorias.forEach(function(subcategoria) {
            subcategoria.classList.toggle("show");
        });
    }
   