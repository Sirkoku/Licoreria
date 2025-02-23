

function login(){
    let intentos = 1 
    let identificar = true 
    do{ 
        let usuario = prompt ("ingrese su usuario")
        if (usuario === null){
            break
        }
        if(usuario === "fausto crivelli" && intentos <=3){
            alert(`bienvenido al sistema Sr. ${usuario}`)
            identificar = false
        }
        if(usuario === "milton salazar" && intentos <=3){
            alert (`Bienvenido tutor ${usuario}`)
            identificar = false
        }
        else{
            alert ("no reconozco el usuario")
            intentos ++
            if (intentos > 3){
                alert ("usted ha superado los intentos")
                break
            }
        }
        
    }while (identificar)
    
}

login ();

function sumar(a,b) {
    return a + b
}
function restar (a,b) {
    return a - b 
}
const iva = 1.21
