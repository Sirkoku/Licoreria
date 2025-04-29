
const textoIntro = "Inspirada en Baco, el dios del vino y la celebración, nuestra empresa busca ofrecer calidad para los amantes del buen beber.";
let i = 0;
const speed = 20;
const textoElemento = document.getElementById("introText");

function escribirTexto() {
  if (i < textoIntro.length) {
    textoElemento.innerHTML += textoIntro[i];
    i++;
    setTimeout(escribirTexto, speed);
  }
}else{
  setTimeout(() =>{
    window.location.href= "index.html";
  },1000);
}

window.addEventListener('DOMContentLoaded',() =>{
  if (localStorage.getItem("introVisto") === "true") {
    window.location.href = "index.html";
  } else {
    escribirTexto();
    localStorage.setItem("introVisto", "true");
  }
});