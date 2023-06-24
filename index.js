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