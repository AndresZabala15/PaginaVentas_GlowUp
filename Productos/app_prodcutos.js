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
    },
    {
        id: 4,
        nombre:`Vestido Amarillo`,
        precio: 55000,
        imagen:"./vestido_amarillo.jpg"
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

//funcion para que aparezcan las opciones en la barra de busqueda cuando se escribe

function filtrarSugerencias(){
    const input = document.getElementById(`barraBusqueda`)
    const datalist = document.getElementById(`suggestions`);
    const texto = input.value.toLowerCase();
    datalist.innerHTML=``;

    const nombresFiltrados = productos
    .map(p => p.nombre)
    .filter(nombre => nombre.toLowerCase().includes(texto));

    nombresFiltrados.forEach(nombre => {
        const option = document.createElement('option');
        option.value = nombre;
        datalist.appendChild(option);
    });

}
// Filtrado de productos al escribir
function filtrarProductos(){
    const textoBusqueda = document.getElementById('barraBusqueda').value.toLowerCase();
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBusqueda)
    );
    mostrarProductos(productosFiltrados);
}

// Eventos
document.getElementById('barraBusqueda').addEventListener('input', () => {
    filtrarSugerencias();
    filtrarProductos();
});

// Mostrar todos los productos al cargar
mostrarProductos(productos);
