/*
Swal.fire({
    title: "How old are you?",
    icon: "question",
    input: "range",
    inputLabel: "Your age",
    inputAttributes: {
    min: "18",
    max: "100",
    step: "1"
    },
    inputValue: 25
});



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

document.getElementById("verCarrito").addEventListener("click", mostrarCarrito);

function mostrarCarrito() {
    if (carrito.length === 0) {
        Swal.fire("El carrito está vacío");
        return;
    }

    let contenido = carrito.map(item =>
        `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`
    ).join("<br>");

    Swal.fire({
        title: "Carrito de Compras",
        html: contenido,
        showCancelButton: true,
        confirmButtonText: "Finalizar Compra",
        cancelButtonText: "Seguir comprando"
    }).then((result) => {
        if (result.isConfirmed) {
            finalizarCompra();
        }
    });
}

function finalizarCompra() {
    carrito = [];
    localStorage.removeItem("carrito");
    Swal.fire("¡Gracias por tu compra!", "Tu pedido ha sido procesado", "success");
}


let lista = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// 🔽 Cargamos el catálogo al iniciar
fetch("catalogo.json")
    .then(res => res.json())
    .then(data => {
        lista = data.bebidas.map(b => new Bebida(b.nombre, b.precio, b.stock));
        localStorage.setItem("catalogo", JSON.stringify(lista));
        renderizarCatalogo(); // Mostramos las bebidas al cargar
    })
    .catch(err => console.error("Error al cargar catálogo:", err));

// Clase Bebida
class Bebida {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

// Función para mostrar el catálogo
function renderizarCatalogo() {
    const contenedor = document.getElementById("bebidas-container");
    contenedor.innerHTML = "";
    lista.forEach((bebida, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p><strong>${bebida.nombre}</strong></p>
            <p>Precio: $${bebida.precio}</p>
            <p>Stock: ${bebida.stock}</p>
            <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
            <hr>
        `;
        contenedor.appendChild(div);
    });
}

// Función para agregar al carrito
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

// Ver carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        Swal.fire("El carrito está vacío");
        return;
    }

    let contenido = carrito.map(item =>
        `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`
    ).join("<br>");

    Swal.fire({
        title: "Carrito de Compras",
        html: contenido,
        showCancelButton: true,
        confirmButtonText: "Finalizar Compra",
        cancelButtonText: "Seguir comprando"
    }).then((result) => {
        if (result.isConfirmed) {
            finalizarCompra();
        }
    });
}

// Finalizar compra
function finalizarCompra() {
    carrito = [];
    localStorage.removeItem("carrito");
    Swal.fire("¡Gracias por tu compra!", "Tu pedido ha sido procesado", "success");
}

// Buscador
function filtrarProductos() {
    Swal.fire({
        title: "¿Qué bebida está buscando?",
        html: `<input id="buscar" class="swal2-input" placeholder="Nombre de la bebida">`,
        icon: "info",
        confirmButtonText: "Buscar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            let nombre = document.getElementById("buscar").value.trim().toLowerCase();
            let coincidencias = lista.filter(b => b.nombre.toLowerCase().includes(nombre));

            if (coincidencias.length === 0) {
                Swal.fire("Sin resultados en el catálogo");
                return;
            }

            const contenedor = document.getElementById("bebidas-container");
            contenedor.innerHTML = "";

            coincidencias.forEach((bebida, index) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <p><strong>${bebida.nombre}</strong></p>
                    <p>Precio: $${bebida.precio}</p>
                    <p>Stock: ${bebida.stock}</p>
                    <button onclick="agregarAlCarrito(${lista.indexOf(bebida)})">Agregar al carrito</button>
                    <hr>
                `;
                contenedor.appendChild(div);
            });
        }
    });
}

// Eventos
document.getElementById("botonFiltro").addEventListener("click", filtrarProductos);
document.getElementById("verCarrito").addEventListener("click", mostrarCarrito);


        
        document.getElementById("botonFiltro").addEventListener("click",filtrarProductos)
        document.getElementById("verCarrito").addEventListener("click", mostrarCarrito);

        */
        let lista = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class Bebida {
constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
}

fetch("catalogo.json")
.then(res => res.json())
.then(data => {
    lista = data.bebidas.map(b => new Bebida(b.nombre, b.precio, b.stock));
    renderizarCatalogo();
})
.catch(err => console.error("Error al cargar catálogo:", err));

function renderizarCatalogo() {
const contenedor = document.getElementById("bebidas-container");
contenedor.innerHTML = "";

lista.forEach((bebida, index) => {
    const div = document.createElement("div");
    div.className = "col";
    div.innerHTML = `
    <div class="card h-100 shadow-sm">
        <img src="${bebida.imagen}" class="card-img-top" alt="${bebida.nombre}">
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

function mostrarCarrito() {
if (carrito.length === 0) {
    Swal.fire("El carrito está vacío");
    return;
}

let contenido = carrito.map(item =>
    `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`
).join("<br>");

Swal.fire({
    title: "Carrito de Compras",
    html: contenido,
    showCancelButton: true,
    confirmButtonText: "Finalizar Compra",
    cancelButtonText: "Seguir comprando"
}).then((result) => {
    if (result.isConfirmed) {
    finalizarCompra();
    }
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

    if (coincidencias.length === 0) {
        Swal.fire("Sin resultados en el catálogo");
        return;
    }

    const contenedor = document.getElementById("bebidas-container");
    contenedor.innerHTML = "";

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
    }
});
}

document.getElementById("botonFiltro").addEventListener("click", filtrarProductos);
document.getElementById("verCarrito").addEventListener("click", mostrarCarrito);
