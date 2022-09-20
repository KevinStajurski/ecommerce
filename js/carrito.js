const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
let total = 0
//Muestra el carrito
carrito.forEach ((producto) => {
  divCarrito.innerHTML += `
    <div class="card cardProducto">
      <img src="${producto.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">ID: ${producto.id}</p>
        <p class="card-text">Marca: ${producto.marca}</p>
        <p class="card-text">Modelo: ${producto.modelo}</p>
        <p class="card-text">Precio: $ ${producto.precio}</p>
        <p class="card-text">Cantidad: ${producto.agregados}</p>
      </div>
    </div>`
    total=total+producto.precio*producto.agregados
})
total==0 ? divCarrito.innerHTML = `Tu carrito se encuentra vacío.` : divCarrito.innerHTML += `<p>El total es: $ ${total}</p>`
//Vaciar carrito
const vaciarCarrito = document.getElementById("vaciarCarrito")
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
        divCarrito.innerHTML = `Tu carrito se encuentra vacío.`
      )
    }
  })
})
//Finalizar compra
const finalizarCompra = document.getElementById("finalizarCompra")
finalizarCompra.addEventListener(`click`, () => {
  if (total==0){
    Swal.fire('El carrito esta vacio!')
  } else {
    Swal.fire('Gracias por su compra!')
    divCarrito.innerHTML = `Recibirá los productos en un plazo de 72 horas.`
    localStorage.clear()
  }
})