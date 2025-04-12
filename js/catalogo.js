const catalogo = [

{id:1, nombre: "cordero con piel de lobo",precio: 4500,stock: 25},
{id:2, nombre: "Santa Julia Tinto",precio: 4000,stock:25},
{id:3, nombre: "Santa Julia Blanco",precio: 4000,stock:25},
{id:4, nombre: "tumpeter tinto",precio: 4500,stock:25},
{id:5, nombre: "Fernet branca 750ml", precio:7000,stock:40},
{id:6, nombre: "Fernet Branca 1lts", precio:12000,stock:30},
{id:7, nombre: "Gin Bombay",precio:15000,stock:20},
{id:8, nombre: "Cosecha Tardia blanco",precio:3000,stock:35},
{id:9, nombre: "Cosecha Tardia tinto",precio:3000,stock:35},
{id:10, nombre: "Vodka Sky",precio:10000,stock:25},
{id:11, nombre: "Vodka Absolute",precio:35000,stock:10},
{id:12, nombre: "Vodka Smirnoff",precio:10000,stock:10},
{id:13, nombre: "Campari",precio:9000,stock:10},
{id:14, nombre: "Gancia Americano",precio:8000,stock:25},
{id:15, nombre: "jagermeister",precio:25000,stock:10},
{id:16, nombre: "Johnnie Walker Red Label 750ml",precio:24000,stock:5},
{id:17, nombre: "Johnnie Walker Black Label 750ml",precio: 34000,stock:5},
{id:18, nombre: "Johnnie Walker Blue Label 750cc",precio:39000,stock:3},
{id:19, nombre: "Johnnie Walker Red Label 1L",precio:28000,stock:5},

];

const catalogoLS = () => {
    localStorage.setItem("catalogo", JSON.stringify(catalogo))
}
const cargarCatalogoLS= () =>{
    return JSON.parse(localStorage.getItem("catalogo")) || [];
}

catalogoLS(catalogo);

let lista = cargarCatalogoLS();