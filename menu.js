let stockCenaArray = [
    {id: 1, nombre: "Cena", tipo: "Chapína",  cantidad: 1, precio: 70, img: 'pictures/c-guatemala.jpg'},
    {id: 2, nombre: "Cena", tipo: "Alemana",   cantidad: 1, precio: 70, img: 'pictures/c-alemana.jpg'},
    {id: 3, nombre: "Cena", tipo: "Española",   cantidad: 1, precio: 70, img: 'pictures/c-espana.jpg'},
    {id: 4, nombre: "Cena", tipo: "Francesa",  cantidad: 1, precio: 70, img: 'pictures/c-francia.jpeg'},
    {id: 5, nombre: "Cena", tipo: "India",   cantidad: 1, precio:70, img: 'pictures/c-india.jpg'},
    {id: 6, nombre: "Cena", tipo: "Irlandesa",  cantidad: 1, precio: 70, img: 'pictures/c-irlanda.jpg'},
    {id: 7, nombre: "Cena", tipo: "Italiana",  cantidad: 1, precio: 70, img: 'pictures/c-italia.jpg'},
    {id: 8, nombre: "Cena", tipo: "Tailandesa", cantidad: 1, precio: 70, img: 'pictures/c-tailandia.jpeg'},
    {id: 9, nombre: "Cena", tipo: "Turca", cantidad: 1, precio:70, img: 'pictures/c-turca.jpg'},
];

let stockAlmuerzoArray = [
    {id: 10, nombre: "Almuerzo", tipo: "Chapín",  cantidad: 1, precio: 70, img: 'pictures/a-guatemala.jpg'},
    {id: 11, nombre: "Almuerzo", tipo: "Argentino",   cantidad: 1, precio: 70, img: 'pictures/a-argentino.jpg'},
    {id: 12, nombre: "Almuerzo", tipo: "Brasieño",   cantidad: 1, precio: 70, img: 'pictures/a-brasil.jpg'},
    {id: 13, nombre: "Almuerzo", tipo: "Chino",  cantidad: 1, precio: 70, img: 'pictures/a-chino.jpg'},
    {id: 14, nombre: "Almuerzo", tipo: "Español",   cantidad: 1, precio:70, img: 'pictures/a-espanol.jpg'},
    {id: 15, nombre: "Almuerzo", tipo: "Estadounidense",  cantidad: 1, precio: 70, img: 'pictures/a-estadounidense.jpeg'},
    {id: 16, nombre: "Almuerzo", tipo: "Italiano",  cantidad: 1, precio: 70, img: 'pictures/a-italiano.jpeg'},
    {id: 17, nombre: "Almuerzo", tipo: "Japones", cantidad: 1, precio: 70, img: 'pictures/a-japones.jpg'},
    {id: 18, nombre: "Almuerzo", tipo: "Mexicano", cantidad: 1, precio:70, img: 'pictures/a-mexico.jpeg'},
];

let stockDesayunoArray = [
    {id: 19, nombre: "Desayuno", tipo: "Chapín",  cantidad: 1, precio: 70, img: 'pictures/d-guatemala.jpeg'},
    {id: 20, nombre: "Desayuno", tipo: "Español",   cantidad: 1, precio: 70, img: 'pictures/d-español.jpg'},
    {id: 21, nombre: "Desayuno", tipo: "Frances",   cantidad: 1, precio: 70, img: 'pictures/d-frances.jpg'},
    {id: 22, nombre: "Desayuno", tipo: "Estadounidense",  cantidad: 1, precio: 70, img: 'pictures/d-america.jpg'},
    {id: 23, nombre: "Desayuno", tipo: "Mexicano",   cantidad: 1, precio:70, img: 'pictures/d-mexico.jpg'},
    {id: 24, nombre: "Desayuno", tipo: "Ingles",  cantidad: 1, precio: 70, img: 'pictures/desayuno-ingles.jpg'},
    {id: 25, nombre: "Desayuno", tipo: "Aleman",  cantidad: 1, precio: 70, img: 'pictures/d-aleman.jpg'},
    {id: 26, nombre: "Desayuno", tipo: "Japones", cantidad: 1, precio: 70, img: 'pictures/d-japon.jpg'},
    {id: 27, nombre: "Desayuno", tipo: "Italiano", cantidad: 1, precio:70, img: 'pictures/d-italia.jpeg'},
];
const cProductos = document.querySelector('.contenedorProductosCena');
const aProductos = document.querySelector('.contenedorProductosAlmuerzo');
const dProductos = document.querySelector('.contenedorProductosDesayuno');
const carrito = document.querySelector('#ver-pedido');
const cabeceraCarrito = document.querySelector("#cabecera-pedido");
const contadorCarrito = document.querySelector("#contador-pedido");
const precitoTotalCarrito = document.querySelector("#precio-total-pedido");
const confirmarPedido = document.querySelector ("#confirmar-pedido");


let carritoCompras = [];//Inicializamos el carrito vacio.

//Alamacenar información en el localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carritoCompras')) {
        carritoCompras = JSON.parse(localStorage.getItem('carritoCompras'));
        actualizarCarritoCompras();
    }
})

stockDesayunoArray.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h2>${producto.nombre }</h2>
    <h2>${producto.tipo }</h2>
    <p><strong>Precio: </strong>Q.${producto.precio}</p>
    
    <button id="agregarCarrito${producto.id}" class="btn-agregar">Agregar al Carrito<i class="fa-solid fa-cart-plus"></i></button>`
    dProductos.appendChild(div);

    //Capturar datos mediante el boton
    const boton = document.getElementById(`agregarCarrito${producto.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    })
})

const agregarAlCarrito = (Idproducto) => {
    //comprobar si el elemento ya existe en el carrito
    const exiteProducto = carritoCompras.some (prod => prod.id === Idproducto);

    if(exiteProducto){
        const prod = carritoCompras.map(prod => {
            if(prod.id === Idproducto){
                prod.cantidad++;
            }
            return prod; 
        })
    }
    else{
        const item = stockDesayunoArray.find((prod) => prod.id === Idproducto);
        carritoCompras.push(item);
        console.log(carritoCompras);
    }
    actualizarCarritoCompras();
}

stockAlmuerzoArray.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h2>${producto.nombre }</h2>
    <h2>${producto.tipo }</h2>
    <p><strong>Precio: </strong>Q.${producto.precio}</p>
    
    <button id="agregarCarrito${producto.id}" class="btn-agregar">Agregar al Carrito<i class="fa-solid fa-cart-plus"></i></button>`
    aProductos.appendChild(div);

    //Capturar datos mediante el boton
    const boton = document.getElementById(`agregarCarrito${producto.id}`);
    boton.addEventListener('click', () => {
        anadirAlCarrito(producto.id);
    })
})

const anadirAlCarrito = (Idproducto) => {
    //comprobar si el elemento ya existe en el carrito
    const exiteProducto = carritoCompras.some (prod => prod.id === Idproducto);

    if(exiteProducto){
        const prod = carritoCompras.map(prod => {
            if(prod.id === Idproducto){
                prod.cantidad++;
            }
            return prod; 
        })
    }
    else{
        const item = stockAlmuerzoArray.find((prod) => prod.id === Idproducto);
        carritoCompras.push(item);
        console.log(carritoCompras);
    }
    actualizarCarritoCompras();
}

stockCenaArray.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h2>${producto.nombre }</h2>
    <h2>${producto.tipo }</h2>
    <p><strong>Precio: </strong>Q.${producto.precio}</p>
    
    <button id="agregarCarrito${producto.id}" class="btn-agregar">Agregar al Carrito<i class="fa-solid fa-cart-plus"></i></button>`
    cProductos.appendChild(div);

    //Capturar datos mediante el boton
    const boton = document.getElementById(`agregarCarrito${producto.id}`);
    boton.addEventListener('click', () => {
        sumarAlCarrito(producto.id);
    })
})

const sumarAlCarrito = (Idproducto) => {
    //comprobar si el elemento ya existe en el carrito
    const exiteProducto = carritoCompras.some (prod => prod.id === Idproducto);

    if(exiteProducto){
        const prod = carritoCompras.map(prod => {
            if(prod.id === Idproducto){
                prod.cantidad++;
            }
            return prod; 
        })
    }
    else{
        const item = stockCenaArray.find((prod) => prod.id === Idproducto);
        carritoCompras.push(item);
        console.log(carritoCompras);
    }
    actualizarCarritoCompras();
}



confirmarPedido.innerHTML = `
    <button class="btn-confirmar">Confirmar Pedido</button>
`;

const actualizarCarritoCompras = () => {

    carrito.innerHTML = "";
    cabeceraCarrito.innerHTML = "";

    //Inicio cabecera carrito
    const cabecera = document.createElement('div');
    cabecera.classList.add('cabeceraCarrito');
    cabecera.innerHTML = `
    <p>Carrito de Compras</p>
    <button onclick = "cerrarCarro()" class="btn-cerrar"></button>
    `
    cabeceraCarrito.appendChild(cabecera);
    //Fin cabecera carrito

    //Inicio contador carrito
    const contCarrito = document.createElement('div');
    contCarrito.innerHTML = `
    <p > 0</p>
    `
    contadorCarrito.appendChild(contCarrito);
    //Fin contador carrito

    //Inicio Precio total carrito
    const total = document.createElement('div');
    total.innerHTML = `
    <p>Precio Total:</p>
    <p >0</p>
    `
    precitoTotalCarrito.appendChild(total);
    //Fin Precio total carrito

    carritoCompras.forEach((prod) => {
        const div = document.createElement('div');
        div.classList.add("detalles-carrito");
        div.innerHTML = `
        <p>${prod.nombre + " " + prod.tipo }</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: ${prod.cantidad}</p>
        <button onclick = "restarDelCarrito(${prod.id})" class="btn-restar"><i class="fa-regular fa-trash-can"></i></button>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btn-eliminar"><i class="fa-regular fa-trash-can"></i></button>
        `

        carrito.appendChild(div);

        localStorage.setItem('carritoCompras', JSON.stringify(carritoCompras));
    })    
    contadorCarrito.innerText = carritoCompras.length;
    precitoTotalCarrito.innerHTML = `
    <p class="precioTotal" >Precio total: Q ${carritoCompras.reduce((subtotal, prod) => subtotal + prod.precio, 0)}</p>
    `;
}

const btnConfirmarPedido = document.querySelector('.btn-confirmar');
btnConfirmarPedido.addEventListener('click', () => {
    alert('¡Tu pedido ha sido enviado!');
    actualizarCarritoCompras();
});




const eliminarDelCarrito = (Idproducto) => {
    const elemento = carritoCompras.find((prod) => prod.id === Idproducto);
    const indice = carritoCompras.indexOf(elemento);
    carritoCompras.splice(indice, 1);
    actualizarCarritoCompras();
}

const restarDelCarrito = (Idproducto) => {
    const producto = carritoCompras.find((prod) => prod.id === Idproducto);
    if (producto.cantidad > 1) {
        producto.cantidad--;
        actualizarCarritoCompras();
    }
};

const cerrarCarro = () => {
    const cerrar = document.querySelector('.contenedorVerPedido');
    cerrar.classList.add("ocultarCarrito");
}

const abrirCarrito = () => {
    const abrir = document.querySelector('.contenedorVerPedido');
    abrir.classList.add("abrirCarrito");
}