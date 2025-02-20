// Palabra reservada, nombre, dato a almacenar
/* let nombre = "martin"


const pi= 3.14 

"45" String
45 Number */

/* let numero1 = 1
let numero2 = parseFloat ("2") // el parse convierte cualquier string (que se pueda) a un entero

let resultado = numero1+numero2

alert (resultado)

console.log (resultado)
*/
/*
let nombre = prompt("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")

alert ("bienvenido al sistema " + nombre + " " + apellido)*/
// $valor // 
/*
alert(`bienvenido al sistema ${nombre} , me entere que tu apellido es ${apellido}`) */

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
        }else{
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