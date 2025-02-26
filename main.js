

function login(){
    let intentos = 1 
    let identificar = true 
    do{ 
        let usuario = prompt ("ingrese su usuario")
        if (usuario === null){
            break
        }
        if(usuario === "fausto" && intentos <=3){
            alert(`bienvenido al sistema Sr. ${usuario}`)
            identificar = false
            calcularPrecioFinal()
        } else if(usuario === "milton" && intentos <=3){
            alert (`Bienvenido tutor ${usuario}`)
            identificar = false
            calcularPrecioFinal()
        } else {
            alert ("no reconozco el usuario")
            intentos ++
            if (intentos > 3){
                alert ("usted ha superado los intentos")
                break
            }
        }
        } while (identificar) 
    }

const iva = 1.21

function calcularIva(importe){
    if(parseFloat (importe)){
        let resultado = importe * iva
        alert("el importe mas iva es: "+ resultado)
    }
}


function calcularPrecioFinal (){
    let precioDelProducto = prompt("ingresa el importe total de la compra")
    calcularIva(precioDelProducto)
}

login();


