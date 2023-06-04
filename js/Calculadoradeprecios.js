// PRODUCTOS
const productos = [


    // Camas
    {
        id: "Cama-01",
        titulo: "Nemo",
        imagen: "/Pet img/CAMA PEZ.png",
        categoria: {
            nombre: "Camas",
            id: "Camas"
        },
        precio: 95000
    },
    {
        id: "Cama-02",
        titulo: "Spiderman",
        imagen: "/Pet img/CAMA SPIDERMAN.png",
        categoria: {
            nombre: "Camas",
            id: "Camas"
        },
        precio: 100000
    },
    {
        id: "Cama-03",
        titulo: "Sully",
        imagen: "/Pet img/MONSTER CAMA.png",
        categoria: {
            nombre: "Camas",
            id: "Camas"
        },
        precio: 90000
    },
    {
        id: "Cama-04",
        titulo: "Tiburonsin",
        imagen: "/Pet img/CAMA TIBURON.png",
        categoria: {
            nombre: "Camas",
            id: "Camas"
        },
        precio: 50000
    },
    {
        id: "Cama-05",
        titulo: "Angry Bird",
        imagen: "/Pet img/CAMA PAJARO.png",
        categoria: {
            nombre: "Camas",
            id: "Camas"
        },
        precio: 50000
    },
    {
        id: "Cama-05",
        titulo: "Cap. America",
        imagen: "/Pet img/CAMA CAPAMERICA.png",
        categoria: {
            nombre: "Camas",
            id: "Camas"
        },
        precio: 60000
    },
    {
        id: "Cama-05",
        titulo: "Mike Wasausky",
        imagen: "/Pet img/CAMA MONSTER VERDE.png",
        categoria: {
            nombre: "Camas",
            id: "Camas"
        },
        precio: 50000
    },
    {
        id: "Cama-05",
        titulo: "Minne Mouse",
        imagen: "/Pet img/CAMA MINNIE.png",
        categoria: {
            nombre: "Camas",
            id: "Camas"
        },
        precio: 30000
    },




    // Ropa
    {
        id: "Ropa-01",
        titulo: "Camuflado",
        imagen: "/Pet img/CHALECO CAMUFLADO AZUL.png",
        categoria: {
            nombre: "Ropa",
            id: "Ropa"
        },
        precio: 25000
    },
    {
        id: "Ropa-02",
        titulo: "Vestido a Cuadros",
        imagen: "/Pet img/VESTIDO.png",
        categoria: {
            nombre: "Ropa",
            id: "Ropa"
        },
        precio: 40000
    },
    {
        id: "Ropa-03",
        titulo: "Medias",
        imagen: "/Pet img/MEDIAS.png",
        categoria: {
            nombre: "Ropa",
            id: "Ropa"
        },
        precio: 10000
    },
    {
        id: "Ropa-04",
        titulo: "Vestido Falda",
        imagen: "/Pet img/VESTIDO 2.png",
        categoria: {
            nombre: "Ropa",
            id: "Ropa"
        },
        precio: 40000
    },
    {
        id: "Ropa-05",
        titulo: "Chaleco Azul",
        imagen: "/Pet img/CHALECO LLUVIA.png",
        categoria: {
            nombre: "Ropa",
            id: "Ropa"
        },
        precio: 35000
    },
    {
        id: "Ropa-06",
        titulo: "Chaleco Noche",
        imagen: "/Pet img/CHALECO LLUVIA 3.png",
        categoria: {
            nombre: "Ropa",
            id: "Ropa"
        },
        precio: 35000
    },
    {
        id: "Ropa-07",
        titulo: "Chaleco Pastel",
        imagen: "/Pet img/CHALECO LLUVIA 2.png",
        categoria: {
            nombre: "Ropa",
            id: "Ropa"
        },
        precio: 25000
    },
    {
        id: "Ropa-08",
        titulo: "Chaleco amarillo",
        imagen: "/Pet img/CHALECO AZUL.png",
        categoria: {
            nombre: "Ropa",
            id: "Ropa"
        },
        precio: 20000
    },





    // Comida
    {
        id: "Comida-01",
        titulo: "Paquete Mickey",
        imagen: "/Pet img/COMIDA 1.png",
        categoria: {
            nombre: "Comida",
            id: "Comida"
        },
        precio: 15000
    },
    {
        id: "Comida-02",
        titulo: "Paquete Pepas",
        imagen: "/Pet img/COMIDA 2.png",
        categoria: {
            nombre: "Comida",
            id: "Comida"
        },
        precio: 15000
    },
    {
        id: "Comida-03",
        titulo: "Paquete Palillos",
        imagen: "/Pet img/COMIDA 3.png",
        categoria: {
            nombre: "Comida",
            id: "Comida"
        },
        precio: 20000
    },
    {
        id: "Comida-04",
        titulo: "Huesitos De Color",
        imagen: "/Pet img/COMIDA 4.png",
        categoria: {
            nombre: "Comida",
            id: "Comida"
        },
        precio: 35000
    },

    {
        id: "Comida-04",
        titulo: "Huesitos",
        imagen: "/Pet img/COMIDA 5.png",
        categoria: {
            nombre: "Comida",
            id: "Comida"
        },
        precio: 30000
    },
    {
        id: "Comida-04",
        titulo: "Caja Medallones",
        imagen: "/Pet img/COMIDA 7.png",
        categoria: {
            nombre: "Comida",
            id: "Comida"
        },
        precio: 28000
    },
    {
        id: "Comida-04",
        titulo: "Caja Palillos",
        imagen: "/Pet img/COMIDA 6.png",
        categoria: {
            nombre: "Comida",
            id: "Comida"
        },
        precio: 28000
    },
    {
        id: "Comida-04",
        titulo: "Caja Mickey",
        imagen: "/Pet img/COMIDA 8.png",
        categoria: {
            nombre: "Comida",
            id: "Comida"
        },
        precio: 25000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
