const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
const total = carrito.reduce((valorPrevio, valorActual) => valorPrevio + valorActual.precio, 0)//Suma todos los precios del carrito
const vaciarCarrito = document.getElementById("vaciarCarrito")
const finalizarCompra = document.getElementById("finalizarCompra")
//Muestra el carrito
total==0 ? divCarrito.innerHTML = `Tu carrito se encuentra vacío.` : divCarrito.innerHTML = ``
carrito.forEach((producto)=>{
    divCarrito.innerHTML += `
      <div class="card cardProducto">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">ID: ${producto.id}</p>
          <p class="card-text">Marca: ${producto.marca}</p>
          <p class="card-text">Modelo: ${producto.modelo}</p>
          <p class="card-text">Precio: $ ${producto.precio}</p>
        </div>
      </div>
    `
})
divCarrito.innerHTML += `<p>El total es: $ ${total}</p>`
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