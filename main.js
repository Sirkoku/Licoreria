
/*
function login(){
    let intentos = 1 
    let identificar = true 
    do{ 
        let usuario = prompt ("ingrese su usuario")
        if (usuario === null){
            break
        }
        if ((usuario === "fausto" || usuario === "milton") && intentos < 3){
            alert(`bienvenido al sistema Sr. ${usuario}`)
            identificar = false
            
        }else {
            alert ("no reconozco el usuario")
            intentos ++
            if (intentos >=3){
                alert ("usted ha superado los intentos")
                break
            }
        }
        } while (identificar) 
    }

login(); */


/*
function agregarprod(){
    let nombre = prompt("ingrese la bebida que desea agregar").trim()
    let precio = parseFloat(prompt("ingrese el valor del producto"))
    let stock = parseInt(prompt("ingrese el stock total"))

    if(isNaN(precio) || isNaN(stock) || nombre === ""){ //si los datos son erroneos o vacios capturo el error
        alert("por favor complete los datos")
        return; // si no pongo el return me guarda el productos como NaN
    }

    let bebidas7 = new Bebida (nombre,precio,stock)

    lista.push(bebidas7)
    console.table(lista)

}
filtrarproductos();
agregarprod();  */

/*
let bienvenida = document.getElementById("bienvenida")
*/

/*bienvenida.innerText =  "modifica solo el texto" */
/*

bienvenida.innerHTML = "<h1>Bienvenida modificada desde js</h1>"

let referencias = document.createElement("p")

referencias.innerHTML = "<p>referencias inyectadas desde JS </p>"

document.body.appendChild(referencias)
*/
const Bebida = function (nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock  = stock
}

let bebidas1 = new Bebida("vino cosecha tardia",4000,20)
let bebidas2 = new Bebida("vino cordero con piel de lobo",4000,20)
let bebidas3 = new Bebida("vino trumpeter",4500,15)
let bebidas4 = new Bebida("vino oveja negra",4800,25)
let bebidas5 = new Bebida("fernet branca 1lt",14000,50)
let bebidas6 = new Bebida("gin bombay",16000,40)

let lista = [bebidas1 ,bebidas2 ,bebidas3 ,bebidas4 ,bebidas5 , bebidas6]

if(localStorage.getItem("bebidas")){
    lista= JSON.parse(localStorage.getItem("bebidas"))
}

function filtrarproductos(){
    let productoUs = prompt("ingrese el producto que esta buscando").trim().toUpperCase()
    console.log("producto a buscar", productoUs)
    
    let resultado = lista.filter((x) => x.nombre.toUpperCase().includes(productoUs)
    );
     // Mostrar resultado
    if (resultado.length > 0) {
        console.table(resultado);  // Muestra el resultado en una tabla.
    } else {
        Swal.fire("No hay coincidencias en el catálogo.");
    } 

}

function agregarproducto(){

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

            Swal.fire({
                icon:"success",
                title:"bebida agregada",
                text:`el producto ${bebida.nombre} se agrego al carrito `,
                timer: 2500 //tiempo en milisegundos//,
            });
            console.table(lista);
            }
            })
            }


            let boton= document.getElementById("boton")
            boton.addEventListener("click",agregarproducto)

filtrarproductos();
agregarproducto();