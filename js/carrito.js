
//Agrego mediante un event click una funcion para poder ver el carrito.
//verCarrito.addEventListener("click", () => {
const RenderCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
  
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "❌";
    //classname me permite darle estilos en css mas tarde.
    modalbutton.className ="modal-header-button";
  
    //Mediante el boton X para cerrar
    modalbutton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalbutton);
  
  
  
    carrito.forEach((pizza) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
      <img src="${pizza.img}">
      <h3>${pizza.nombre}</h3>
      <p>$${pizza.precio} </p>
      <span class="restar"> - </span>
      <p class="cantidad"> Cantidad: ${pizza.quantity} </p>
      <span class="sumar"> + </span>
        <p> Total: ${pizza.quantity * pizza.precio}</p>
      `;
  
    modalContainer.append(carritoContent);


// con querySelector capturo la clase restar de carritoContent.
    let restar = carritoContent.querySelector(".restar")
    restar.addEventListener("click", () => {

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Se quito del carrito."
      });
        if(pizza.quantity !== 1) {
       pizza.quantity--;
    }
        saveLocal();    
        RenderCarrito();
        
    });

    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Se sumo al carrito."
      });

       pizza.quantity++;
       saveLocal();  
        RenderCarrito();
    });

    //testeando la cantidad de productos ingresadas al carrito
    //console.log(carrito.length);

    let eliminar = document.createElement("span");
    eliminar.innerText = "X";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);
    
    eliminar.addEventListener("click", eliminarProducto);
    });
  
  //Utilizo .reduce para acumular los precios seleccionados y empieza en 0.
    const total = carrito.reduce((acc, el) => acc + el.precio * el.quantity, 0);
  
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `total a pagar: ${total} $ `;
    modalContainer.append(totalCompra);
  };

  verCarrito.addEventListener("click", RenderCarrito);

  const eliminarProducto = () => {
    //con .find busco el id del producto que quiero eliminar.
    const foundId = carrito.find((element)=> element.id);
    //.filter me sirve para mostrar el carrito sin el id seleccionado.
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    //actualiza el localStorage si quitamos un producto.
    saveLocal();
    RenderCarrito();
  };


const carritoCounter = () => {
    cantidadCarrito.style.display= "block";

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();