//Arreglos
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []//Consulta del carrito en el local storage, si no existe lo crea vacio
//Api de productos
fetch (`https://63127002b466aa9b038a2690.mockapi.io/productos`)
.then (respuesta => respuesta.json())
.then (data => {
    //Carga los productos en el HTML
    data.forEach ((elemento) => {
        divProductos.innerHTML += `
        <div class="card cardProducto">
            <img src="${elemento.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Marca: ${elemento.marca}</p>
                <p class="card-text">Modelo: ${elemento.modelo}</p>
                <p class="card-text">Precio: $ ${elemento.precio}</p>
                <p class="card-text">ID: ${elemento.id}</p>
                <p class="card-text">Stock: ${elemento.stock}</p>
                <button type="button" class="btn btn-primary" id="btnAgregar${elemento.id}">Agregar al carrito</button>
            </div>
        </div>
    `})
    //Eventos de los botones "Agregar al carrito"
    data.forEach ((elemento) => {
        const btnAgregar = document.getElementById (`btnAgregar${elemento.id}`)
        btnAgregar.addEventListener(`click`, () => {
            carrito.push(elemento)//Empuja el producto seleccionado al array carrito
            localStorage.setItem(`carrito`,JSON.stringify(carrito))//Actualiza el arreglo de productos en el local storage
            //Notificacion emergente de producto agregado (toastify)
            Toastify({
                text: "Producto agregado",
                duration: 3000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, black, gray)",
                },
                onClick: function(){} // Callback after click
            }).showToast()
        })
    })
})