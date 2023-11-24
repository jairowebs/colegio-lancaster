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
  var chatbotWindow = document.getElementById('chatbot-window');
  chatbotWindow.style.display = (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') ? 'block' : 'none';
}

function sendMessage() {
  var userInput = document.getElementById('user-input').value;
  displayMessage(userInput, 'user');
  setTimeout(function() {
    displayMessage("En unos minutos nos pondremos en contacto contigo.", 'bot');
  }, 2000);
}

function displayMessage(message, sender) {
  var chatbotMessages = document.getElementById('chatbot-messages');
  var messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerText = message;
  chatbotMessages.appendChild(messageElement);
}

