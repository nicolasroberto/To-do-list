//botón
let mostrarForm = document.getElementById('mostrarForm')
let pagSeleccion = document.getElementById ('pagSeleccion')
let contenidoListas = document.getElementById ('contenidoListas')
let miFlechita = document.getElementById ('miFlechita')
let cerrar = document.getElementById('cerrar')

let pagPrincipal = document.getElementById('pagPrincipal')



mostrarForm.addEventListener('click', function(){
    pagSeleccion.style.display='flex'
    mostrarForm.style.display='none'
    pagListas.style.display='none'
    detalles.style.display="none"
    pagPrincipal.style.display="none"
})

//pop-up

let miProducto = document.getElementById ('miProducto')
let miCategoria = document.getElementById ('miCategoria')
let miDescripcion = document.getElementById ('miDescripcion')
let btnAgregar = document.getElementById ('btnAgregar')
let pagListas = document.getElementById ('pagListas')
let contenidoLista = document.getElementById('contenidoLista')
let tarjeta = document.getElementById('tarjeta')
let detalles = document.getElementById('detalles')
//variable guardar
let listadoStorage = []

btnAgregar.addEventListener('click', function(event){
    let miCategoria = document.getElementById ('miCategoria').value
    let miProducto = document.getElementById ('miProducto').value
    let miDescripcion = document.getElementById ('miDescripcion').value

    if(miProducto =='' || miCategoria ==''){
        document.getElementById('advertencia').innerHTML = "Faltan Producto y Categoría"
    }else{
        let seleccion = `<li><div><img class="iconoCategoria" src="${miCategoria}">${miProducto}</div><button id="miFlechita" style="background-color: transparent;
        border: none;" class="bntFlecha"  onclick= "cuadroDetalles('${miCategoria}', '${miProducto}', '${miDescripcion}')"><img class="flechita" src="/img/arrow-right.svg"></button></li>`
        let contenidoLista = document.getElementById('contenidoLista')
        contenidoLista.innerHTML += seleccion
        mostrarForm.style.display='block'
        pagListas.style.display='block'
        pagSeleccion.style.display='none'
        pagPrincipal.style.display='none'
        //guardar
        listadoStorage.push(seleccion)
        console.log(listadoStorage)
        localStorage.setItem('listaCompras',listadoStorage)
    }
    })

function cuadroDetalles(miCategoria, miProducto, miDescripcion){
    let texto =
    `<img id="cerrar" onclick="cerrarCuadro()" src="/img/close.svg" alt="">
    <img id="icoSelec" src="${miCategoria}">
    <h3 id="prodSelec">${miProducto}</h3>
    <p id="descSelec">${miDescripcion}</p>`
    tarjeta.innerHTML = texto
    pagListas.style.display='none'
    detalles.style.display='block'
    pagPrincipal.style.display='none'
}

function cerrarCuadro(){
    detalles.style.display="none"
    pagListas.style.display='block'
}

let desdeStorage = localStorage.getItem('listaCompras')

if (desdeStorage){
    pagListas.style.display='block'
    pagPrincipal.style.display='none'
    contenidoLista.innerHTML +=desdeStorage
}