function validarEdad(){
    const edadGuardada = localStorage.getItem("edadPermitida")
if(!edadGuardada){


Swal.fire({
    title: "How old are you?",
    icon: "question",
    input: "range",
    inputLabel: "Your age",
    inputAttributes: {
    min: "13",
    max: "100",
    step: "1"
    },
    inputValue: 25,
    confirmButtonText: "continuar"
}).then(result => {
    if(result.value  >= 18){
        localStorage.setItem("edadPermitida","true");
    }else{
        Swal.fire("acceso restringido","ventas exclusivas a mayores de 18","error")
        .then(() => {
            // Bloqueo del contenido o redirección
            document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>🚫 Acceso denegado</h1>";
        });
}
});
}
}

let lista = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class Bebida {
constructor(nombre, precio, stock, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen || "image/no-image.png";
}
}

fetch("catalogo.json")
.then(res => res.json())
.then(data => {
    lista = data.bebidas.map(b => new Bebida(b.nombre, b.precio, b.stock, b.imagen));
    renderizarCatalogo();
})
.catch(err => console.error("Error al cargar catálogo:", err));

function renderizarCatalogo() {
const contenedor = document.getElementById("bebidas-container");
contenedor.innerHTML = "";

lista.forEach((bebida, index) => {
    const div = document.createElement("div");
    div.className = "col";
    const imagen = bebida.imagen ? bebida.imagen : "image/no-image.png";
    div.innerHTML = `
    <div class="card h-100 shadow-sm">
        <img src="${imagen}" class="card-img-top" alt="${bebida.nombre}">
        <div class="card-body">
        <h5 class="card-title">${bebida.nombre}</h5>
        <p class="card-text">Precio: $${bebida.precio}</p>
        <p class="card-text"><small class="text-muted">Stock: ${bebida.stock}</small></p>
        <button class="btn btn-primary" onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
        </div>
    </div>
    `;
    contenedor.appendChild(div);
    
});
}

function agregarAlCarrito(index) {
const producto = lista[index];
const enCarrito = carrito.find(item => item.nombre === producto.nombre);

if (enCarrito) {
    if (enCarrito.cantidad < producto.stock) {
    enCarrito.cantidad++;
    } else {
    Swal.fire("No hay más stock disponible");
    return;
    }
} else {
    carrito.push({ ...producto, cantidad: 1 });
}

localStorage.setItem("carrito", JSON.stringify(carrito));
Swal.fire(`${producto.nombre} agregado al carrito`);
}

function quitarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    localStorage.setItem("carrito", JSON.stringify(carrito)); // para que se guarde actualizado
    renderizarCarrito(); // Vuelve a mostrar el carrito actualizado
}

  // Evento para quitar (podés hacer delegación también si lo necesitás)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-quitar')) {
    const nombre = e.target.dataset.nombre;
    quitarDelCarrito(nombre);
    }
});

function renderizarCarrito() {
    const contenedor = document.getElementById("carrito-container");
    contenedor.innerHTML = "";

    carrito.forEach(item => {
    const div = document.createElement("div");
    div.className = "carrito-item";
    div.innerHTML = `
        <p>${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}
        <button class="btn-quitar btn btn-danger btn-sm" data-nombre="${item.nombre}">Quitar</button></p>
    `;
    contenedor.appendChild(div);
    });
}
function mostrarCarrito() {
    if (carrito.length === 0) {
    Swal.fire("El carrito está vacío");
    return;
    }

    renderizarCarrito(); // muestra el carrito en el contenedor normal

    Swal.fire({
    title: "Carrito cargado",
    html: `<p>Revisá tu carrito debajo de los productos 👇</p>`,
    icon: "info"
    });
}

function finalizarCompra() {
carrito = [];
localStorage.removeItem("carrito");
Swal.fire("¡Gracias por tu compra!", "Tu pedido ha sido procesado", "success");
}

function filtrarProductos() {
Swal.fire({
    title: "¿Qué bebida estás buscando?",
    html: `<input id="buscar" class="swal2-input" placeholder="Nombre de la bebida">`,
    icon: "info",
    confirmButtonText: "Buscar",
    cancelButtonText: "Cancelar",
}).then((result) => {
    if (result.isConfirmed) {
    let nombre = document.getElementById("buscar").value.trim().toLowerCase();
    let coincidencias = lista.filter(b => b.nombre.toLowerCase().includes(nombre));

    const contenedor = document.getElementById("bebidas-container");
    contenedor.innerHTML = "";


    if (coincidencias.length === 0) {
        Swal.fire("Sin resultados en el catálogo");
        return;
    }

    
    coincidencias.forEach((bebida, index) => {
        const div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="card-body">
            <h5 class="card-title">${bebida.nombre}</h5>
            <p class="card-text">Precio: $${bebida.precio}</p>
            <p class="card-text"><small class="text-muted">Stock: ${bebida.stock}</small></p>
            <button class="btn btn-primary" onclick="agregarAlCarrito(${lista.indexOf(bebida)})">Agregar al carrito</button>
            </div>
        </div>
        `;
        contenedor.appendChild(div);
    });
    document.getElementById("volverCatalogo").style.display = "inline-block";
    }
});
}
document.getElementById("volverCatalogo").addEventListener("click", () => {
    renderizarCatalogo();
    document.getElementById("volverCatalogo").style.display = "none"; // Ocultar de nuevo
});


document.getElementById("botonFiltro").addEventListener("click", filtrarProductos);
document.getElementById("verCarrito").addEventListener("click", mostrarCarrito);

window.addEventListener("DOMContentLoaded", () => {
    validarEdad();
});