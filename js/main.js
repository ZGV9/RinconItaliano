
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
saludar()

  // Definir las opciones de pizza como objetos

  const pizzas = [
    { id: 1, nombre: 'Pizza Margarita', precio: 2200 },
    { id: 2, nombre: 'Pizza Pepperoni', precio: 2600 },
    { id: 3, nombre: 'Pizza Vegetariana', precio: 2400 },
    { id: 4, nombre: 'Pizza Hawaiana', precio: 2900 },
    { id: 5, nombre: 'Pizza Capricciosa', precio: 3600 },
    { id: 6, nombre: 'Pizza Champiniones', precio: 3200 }
  ];
  
  // Función para mostrar las opciones de pizza
  function mostrarMenu() {
    console.log('Menú de Pizzas:');
    pizzas.forEach(pizza => {
      console.log(`${pizza.id}. ${pizza.nombre} - $${pizza.precio}`);
    });
  }
  
  // Función para agregar una pizza al carrito
  function agregarAlCarrito(carrito, idPizza) {
    const pizzaSeleccionada = pizzas.find(pizza => pizza.id === idPizza);
    if (pizzaSeleccionada) {
      carrito.push(pizzaSeleccionada);
      console.log(`¡${pizzaSeleccionada.nombre} agregada al carrito!`);
    } else {
      console.log('Pizza no encontrada en el menú.');
    }
  }
  
  // Función para calcular el total del carrito
  function calcularTotal(carrito) {
    return carrito.reduce((total, pizza) => total + pizza.precio, 0);
  }
  
  // Dandole un uso

  const carritoDeCompra = [];
  
  mostrarMenu();
  agregarAlCarrito(carritoDeCompra, 5);
  agregarAlCarrito(carritoDeCompra, 6);
  
  console.log('Contenido del carrito:');
  carritoDeCompra.forEach(pizza => {
    console.log(`${pizza.nombre} - $${pizza.precio}`);
  });
  
  console.log(`Total a pagar: $${calcularTotal(carritoDeCompra)}`); 
  

  console.log("Gracias por utilizar nuestro servicio! Esperamos verlo nuevamente por aqui muy pronto!")