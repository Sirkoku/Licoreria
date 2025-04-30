
const textoIntro = "Inspirada en Baco, el dios del vino y la celebración, nuestra empresa busca ofrecer calidad para los amantes del buen beber.";
let i = 0;
const speed = 20;
const textoElemento = document.getElementById("introText");

function escribirTexto() {
  return new Promise((resolve =>{
    function escribir(){
      if (i< textoIntro.length){
        textoElemento.textContent += textoIntro[i];
        i++;
        setTimeout(escribir,speed);
      }else{
        setTimeout(()=>{
          resolve();
        },1000);
      }
    }
    escribir();
  }))
}

function iniciar(){
  if (!localStorage.getItem("introVisto")){
    escribirTexto().then(()=>{
      localStorage.setItem("introVisto","true");
      window.location.href= "index.html";
    });
  }else{
    window.location.href= "index.html";
  }
}

iniciar();