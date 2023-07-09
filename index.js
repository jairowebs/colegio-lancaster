var registroBtn = document.getElementById("registroBtn");
var capaFlotante = document.getElementById("capaFlotante");
registroBtn.addEventListener("click", function() {
  capaFlotante.style.display = "block";
});
 capaFlotante.addEventListener("click", function(event) {
  if (event.target === capaFlotante) {
    capaFlotante.style.display = "none";
  }
 });
 //"tarjetas de pagina de servicio"

 var likeBtn = document.getElementById("likeBtn");
var dislikeBtn = document.getElementById("dislikeBtn");
var shareLink = document.getElementById("shareLink");
 likeBtn.addEventListener("click", function() {
  // Agregar código para aumentar el contador de "Me gusta"
});
 dislikeBtn.addEventListener("click", function() {
  // Agregar código para aumentar el contador de "No me gusta"
});
shareLink.addEventListener("click", function () {
    // Agregar código para compartir la
});

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