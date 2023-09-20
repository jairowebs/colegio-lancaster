const titulo = document.getElementById('titulo1');

setTimeout(() => {
  titulo.classList.add('animacion');
}, 1000);
/* animacion titulo */


document.getElementById("mainButton").addEventListener("click", function () {
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
  alert("¡Hola ING SANDRA! este proyecto aun no se realiza en backend");
}

window.addEventListener('DOMContentLoaded', (event) => {
  const mapaTitulo = document.getElementById('mapa-titulo');
  mapaTitulo.addEventListener('click', (e) => {
    const sitemap = document.querySelector('.sitemap');
    sitemap.classList.toggle('show');
  });
});







function toggleChatbot() {
  var chatbotWindow = document.getElementById("chatbot-window");
  var chatbotIcon = document.getElementById("chatbot-icon");
  if (chatbotWindow.style.display === "none") {
    chatbotWindow.style.display = "block";
    chatbotIcon.style.display = "none";
    idiomaActual = "español"; // Establecer el idioma predeterminado como español al abrir el chatbot
  } else {
    chatbotWindow.style.display = "none";
    chatbotIcon.style.display = "block";
  }
}

function sendMessage() {
  var userInput = document.getElementById("user-input");
  var message = userInput.value;
  if (message !== "") {
    var chatbotMessages = document.getElementById("chatbot-messages");
    chatbotMessages.innerHTML += "<p><strong>Tú:</strong> " + message + "</p>";
    userInput.value = "";
    // Lógica para responder al mensaje del usuario
    var idioma = obtenerIdioma(message);
    var respuesta = obtenerRespuesta(message, idioma);
    chatbotMessages.innerHTML += "<p><strong>Chatbot:</strong> " + respuesta + "</p>";
  }
}

function obtenerIdioma(mensaje) {
  mensaje = mensaje.toLowerCase();
  if (mensaje.includes("español")) {
    return "español";
  } else if (mensaje.includes("inglés")) {
    return "inglés";
  } else if (mensaje.includes("francés")) {
    return "francés";
  } else {
    return "español"; // Establecer el idioma predeterminado como español si no se menciona un idioma específico
  }
}

function obtenerRespuesta(mensaje, idioma) {
  // Lógica para obtener la respuesta en el idioma correspondiente
  // Aquí puedes agregar la lógica específica de tu chatbot
  // Ejemplo de respuesta genérica en diferentes idiomas
  if (idioma === "español") {
    return "Gracias por contactarnos.en unos momentos uno de nuestros agentes se comunicara con tigo";
  } else if (idioma === "inglés") {
    return "Thank you for contacting us. How can I assist you?";
  } else if (idioma === "francés") {
    return "Merci de nous contacter. Comment puis-je vous aider ?";
  } else {
    return "Lo siento, no puedo entender tu solicitud en este momento.";
  }
}

