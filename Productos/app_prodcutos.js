const productos = [
    {
        id:1,
        nombre: "Vestido blanco",
        precio: 80000,
        imagen: "./Vestido_blanco.jpg"
    },
    {
        id: 2,
        nombre: "Vestido azul",
        precio: 90000,
        imagen: "./Vestido_azul.jpg"
    },
    {
        id:3,
        nombre: "Vestido morado",
        precio: 70000,
        imagen:"./Vestido_morado.jpg"
    }

];

function mostrarProductos(productoFiltrado){
    const contenedorProductos = document.getElementById('raiz');
    if(productoFiltrado.length === 0){
        contenedorProductos.innerHTML = `<p>No se encontraron productos</p>`;
        return;
    }
    contenedorProductos.innerHTML = productoFiltrado.map(producto => `
        <div class="box">
            <div class="img-box">
                <img src="${producto.imagen}" class="images" alt="${producto.nombre}">
            </div>
            <div class="bottom">
                <p>${producto.nombre}</p>
                <h2>${producto.precio}</h2>
                <button>Añadir al carrito</button>
            </div>
        </div>
    `).join('');
}

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);

// Filtrado de productos
function filtrarProductos(){
    const textoBusqueda = document.getElementById('barraBusqueda').value.toLowerCase();
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBusqueda)
    );
    mostrarProductos(productosFiltrados);
}

document.getElementById('barraBusqueda').addEventListener('input', filtrarProductos);