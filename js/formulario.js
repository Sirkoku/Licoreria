const container = document.getElementById("form-container");

const form = document.createElement("form");
form.id= "formulario";

const mensajeExito = document.createElement("div");
mensajeExito.id = "mensaje-exito";
mensajeExito.textContent = "¡Formulario enviado con éxito!";
container.appendChild(mensajeExito);

function crearCampo(labelText,tipo,id){
    const label = document.createElement("label");
    label.setAttribute("for",id);
    label.textContent = labelText;

    let input;
    if (tipo === "textarea"){
        input=document.createElement("textarea");
        input.rows= 4;
    }else{
        input =document.createElement("input");
        input.type= tipo;
    }
    input.id= id;
    input.name= id;
    input.required= true;
    
    form.appendChild(label);
    form.appendChild(input);
}

crearCampo("nombre","text","nombre");
crearCampo("Correo electronico","email","email");
crearCampo("mensaje","textarea","mensaje");

const boton= document.createElement("button");
boton.type= "submit";
boton.textContent= "enviar";
form.appendChild(boton);

container.appendChild(form);

window.addEventListener("load", () => {
    const datosGuardados = JSON.parse(localStorage.getItem("formularioData"));
    if (datosGuardados) {
    document.getElementById("nombre").value = datosGuardados.nombre || "";
    document.getElementById("email").value = datosGuardados.email || "";
    document.getElementById("mensaje").value = datosGuardados.mensaje || "";
    }
});

form.addEventListener("submit",function(event){
    event.preventDefault();

    const nombre= document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje= document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje){
        Toastify({
            text: "Por favor, completa todos los campos.",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#ff6b6b",
        }).showToast();
        return;
    }
    const datos = { nombre, email, mensaje };
    
    localStorage.setItem("formularioData", JSON.stringify(datos));

    
    Toastify({
        text: "Formulario enviado con éxito 🎉",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#4CAF50",
    }).showToast();
    
    form.reset();
});