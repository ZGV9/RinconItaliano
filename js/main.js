// Ignorar ()[]{} \n

/*
function solicitarPrecio () {
    let precioProducto = Number(prompt('Ingrese el Precio'))
    console.log('El precio ingresado es $' + precioProducto)
}
solicitarPrecio()
function solicitarIva () {
    let iva = Number(prompt('Ingrese el Monto de IVA'))
    console.log('El IVA ingresado es %' + iva)
}
solicitarIva()
function sumar () {
    let precioFinal = precioProducto + iva
    console.log('El precio final es de $' + precioFinal)
}

sumar()

*/

//Funciones


function saludar () {
    let nombre = prompt("Porfavor, Ingrese su nombre:")
    console.log(
        "Bienvenido/a " + nombre + " a nuestro pedido en línea"
    )
    console.log(
        "A continuación, seleccione los productos que desea agregar a la orden"
        )
}

let productoCarrito
function agregarProducto () {
    productoCarrito = parseInt(prompt(
        "Pizzas: \n 1: Pizza Margarita \n 2: Pizza Champiniones  \n 3: Pizza Pepperoni  \n 4: Pizza Capricciosa")
        )
    
    if (productoCarrito === 1) {
        console.log("Seleccionasate Pizza Margarita")
    } else if (productoCarrito === 2) {
        console.log("Seleccionasate Pizza Champiniones")
    } else if (productoCarrito === 3) {
        console.log("Seleccionasate Pizza Pepperoni")
    } else if (productoCarrito === 4) {
        console.log("Seleccionasate Pizza Capricciosa")
    } else console.log("La opcion seleccionada no es valida")
}

function finalizarCompra () {
    if (productoCarrito == 1) {
        alert("El precio final de tu Pizza Margarita es " + margherita * 1.21)
    } else if (productoCarrito == 2) {
        alert("El precio final de tu Pizza Champiniones es " + champiniones * 1.21)
    } else if (productoCarrito == 3) {
        alert("El precio final de tu Pizza Pepperoni es " + pepperoni * 1.21)
    } else if (productoCarrito == 4) {
        alert("El precio final de tu Pizza Capricciosa es " + capricciosa * 1.21)
    } else alert("La opcion seleccionada no es valida")    
}



//Main 

saludar()
agregarProducto()


let confirmarContinuacion = parseInt(prompt(
    "Que desea realizar a continuacion? \n 1: Finalizar Compra \n 2: Continuar Comprando \n 3: Cancelar Compra")
)

let margherita = 2190
let champiniones = 2940
let pepperoni = 2940
let capricciosa = 4390


while (confirmarContinuacion !== 3) {
    if (confirmarContinuacion === 1) {
        finalizarCompra()
        console.log("A continuacion veras tu carrito para finalizar tu compra")
        console.log("*SE MOSTRARIA EL CARRITO*")
        break
    } else if (confirmarContinuacion === 2) {
        agregarProducto()
        
    } 
    confirmarContinuacion = parseInt(prompt(
        "Que desea realizar a continuacion? \n 1: Finalizar Compra \n 2: Continuar Comprando \n 3: Cancelar Compra")
    )
}
console.log("Gracias por utilizar nuestro servicio! Esperamos verlo nuevamente por aqui muy pronto!")


