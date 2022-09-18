const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
let total = 0
const vaciarCarrito = document.getElementById("vaciarCarrito")
const finalizarCompra = document.getElementById("finalizarCompra")
//Muestra el carrito
//total==0 ? divCarrito.innerHTML = `Tu carrito se encuentra vacío.` : divCarrito.innerHTML = ``

//Api de productos
fetch (`https://63127002b466aa9b038a2690.mockapi.io/productos`)
.then (respuesta => respuesta.json())
.then (data => {
  data.forEach ((producto) => {
    if (carrito.includes(producto.id)){
      divCarrito.innerHTML += `
      <div class="card cardProducto">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">ID: ${producto.id}</p>
          <p class="card-text">Marca: ${producto.marca}</p>
          <p class="card-text">Modelo: ${producto.modelo}</p>
          <p class="card-text">Precio: $ ${producto.precio}</p>
        </div>
      </div>`
      total=total+producto.precio
    }
  })
  total==0 ? divCarrito.innerHTML = `Tu carrito se encuentra vacío.` : divCarrito.innerHTML += `<p>El total es: $ ${total}</p>`
  
})
//Vaciar carrito
vaciarCarrito.addEventListener(`click`, () => {
  Swal.fire({
    title: 'Atencion!',
    text: "Seguro que desea vaciar el carrito?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        localStorage.clear(),
        'Borrado',
        divCarrito.innerHTML = ``,
        divCarrito.innerHTML = `Tu carrito se encuentra vacío.`
      )
    }
  })
})
//Finalizar compra
finalizarCompra.addEventListener(`click`, () => {
  Swal.fire('Gracias por su compra!')
})