//Funciones 
/*
function saludar () {
    let nombre = prompt("Porfavor, Ingrese su nombre:")
    console.log(
        "Bienvenido/a " + nombre + " a nuestro pedido en línea"
    )
    console.log(
        "A continuación, seleccione los productos que desea agregar a la orden"
        )
}
saludar() */




//Declaro variables y vinculo a HTML mediante Id.
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


//Declaro variable 'carrito' donde luego pushea lo clickeado y guardo
let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

const getPizzas = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  

  //con '.forEach' recorro el array y '=>' asigna funcion.
data.forEach((pizza) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${pizza.img}">
    <h3>${pizza.nombre}</h3>
    <p class="price">${pizza.precio} $</p>
  `;

  shopContent.append(content);

  //declaro variable comprar con elemento boton para comprar.
  let comprar = document.createElement("button");
  comprar.innerText =  "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  //Agrego al carrito lo clickeado.
  comprar.addEventListener("click", () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Se agrego al carrito 😎🍕"
    });
//.some() determina si al menos un miembro de la matriz satisface la prueba definida por la función dada devuelve valor booleano.
  const repeat = carrito.some((repeatPizza) => repeatPizza.id === pizza.id);
  if (repeat){
    //.map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    carrito.map((prod)=> {
      if (prod.id === pizza.id){
        prod.quantity++
      }
    });
  }else {

    carrito.push({
    id: pizza.id,
    img: pizza.img,
    nombre: pizza.nombre,
    precio: pizza.precio,
    quantity: pizza.quantity,
    });
  }
    console.log(carrito);
    carritoCounter();
    saveLocal();
  });

});

};
getPizzas();


//setItem
const saveLocal = () =>{
localStorage.setItem('Carrito', JSON.stringify(carrito));
};

Swal.fire({
  title:"Bienvenido a Rincon Italiano!",
  text: "🍕Disfuta las mejores pizzas🍕",
  background: "#bab782",
  backdrop:true,
  color: "#000",
  timer:"4200",
  timerProgressBar:true,
   customClass: {
  //   container: '...',
    popup: 'popup',
  //   header: '...',
  //   title: '...',
  //   closeButton: '...',
  //   icon: '...',
  //   image: '...',
  //   htmlContainer: '...',
  //   input: '...',
  //   inputLabel: '...',
  //   validationMessage: '...',
  //   actions: '...',
  //   confirmButton: '...',
  //   denyButton: '...',
  //   cancelButton: '...',
  //   loader: '...',
  //   footer: '....',
  //   timerProgressBar: '....',
   },
  showConfirmButton:false,
});