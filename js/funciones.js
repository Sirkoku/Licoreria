class Bebida {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}



function mostrarBebidas() {
    const ul = document.getElementById("lista-bebidas");
    ul.innerHTML = ""; 

    lista.forEach(bebida => {
    const li = document.createElement("li");
    li.textContent = `${bebida.nombre} - $${bebida.precio}`;
    ul.appendChild(li);
    });
}


function filtrarProductos(){
    Swal.fire({
        title: "¿Qué bebida está buscando?",
        html: `<input id="buscar" class="swal2-input" placeholder="Nombre de la bebida">`,
        icon: "info",
        confirmButtonText: "Buscar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if(result.isConfirmed){
            let nombre = document.getElementById("buscar").value.trim().toLowerCase();
            let coincidencias = lista.filter(b => b.nombre.toLowerCase().includes(nombre));
            
            if(coincidencias.length === 0){
                Swal.fire("Sin resultados en el catálogo");
                return;
            }

            const ul = document.getElementById("lista-bebidas");
            
            ul.innerHTML = "";
            
            coincidencias.forEach(bebida => {
                const li = document.createElement("li");
                li.textContent = `${bebida.nombre} - $${bebida.precio}`;
                ul.appendChild(li);
            });
        }
    });
}

function agregarProducto(){

Swal.fire({

    title: "agregar bebida",
    html: `<label>Nombre:</label> <input id="nombre-input" class="swal2-input" type= "text" autofocus> 
        <label>Precio:</label> <input id="precio-input" class="swal2-input" type= "number" step="0.01">
        <label>Stock:</label> <input id="stock-input" class="swal2-input" type= "number" step="1">`,
        showCancelButton: true,
        confirmButtonText: "agregar",
        cancelButtonText: "cancelar",
}).then((result)=>{
    if(result.isConfirmed){
        let nombre= document.getElementById("nombre-input").value.trim()
        let precio= parseFloat(document.getElementById("precio-input").value)
        let stock =parseInt(document.getElementById("stock-input").value) 
        
        if(isNaN(precio) || isNaN(stock) || nombre === ""){
            Swal.fire({
                icon: "error",
                title: "error",
                text: "por favor ingrese todos los datos"
            }); return
        }
        
        let bebida = new Bebida(nombre,precio,stock)

        if(lista.some((b)=> b.nombre === bebida.nombre)){
            Swal.fire({
            icon:"warning",
            title:"advertencia",
            text:"el producto ya existe en la lista"
            })
            return
        }
        lista.push(bebida);
        localStorage.setItem("catalogo", JSON.stringify(lista));
        mostrarBebidas(); 

        Swal.fire({
            icon:"success",
            title:"bebida agregada",
            text:`el producto ${bebida.nombre} se agrego al carrito `,
            timer: 2500 //tiempo en milisegundos//
        });
        }
        })
        }


        document.getElementById("boton").addEventListener("click",agregarProducto);
        document.getElementById("botonFiltro").addEventListener("click",filtrarProductos)
        
        mostrarBebidas();