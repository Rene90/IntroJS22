console.log("Esta es la clase para remover elementos del DOM")
var contenedor = document.getElementById("contenedor")
var contenedor2 = document.getElementById("contenedor2")

function crearElemento(){
    //Crear elemento de tipo parrafo
    var parrafo = document.createElement("p")
    //instertamos texto dentro de nuestro elemento parrafo
    parrafo.innerText = "Se ha creado el elemento parrafo desde Javascript"
    parrafo.id = "1p"
    // insertamos en nodo padre (html DOM)
    contenedor.appendChild(parrafo)
}

// Primer manera para remover elementos desde js Removechild
function funcionRemover(){
    var v = document.getElementById('1p')
    contenedor.removeChild(v)
    //contenedor.innerHTML = `<p>Este parrafo se esta creando a la par </p>`
    var p2 = document.createElement("p")
    p2.innerText = "Este parrafp se esta creando a la par"
    p2.id= "1p"
    contenedor.appendChild(p2)
}
//Seegunda manera para remover elementos desde js
//Se remueve elementos de manera mas general, o vaciar por completo el elemento contenedor
function funcionRemover2(){
    contenedor.innerHTML = ``
}

//Primer manera de crear un elemento html "Create element"
var botonCreado = document.createElement('button')
//adicionar las propiedades que queremos para nuestro elemento, id, clase , texto etc 
botonCreado.innerText = "Boton creado desde Javascript"
botonCreado.id = "boton1"
botonCreado.type = "button"
botonCreado.addEventListener("click",crearElemento)
contenedor.appendChild(botonCreado)

//Segunda manera de crear un elemento HTML

var botonCreado2 = `
    <button id='boton2' onclick='funcionRemover()' >Segundo boton creado desde JS</button>`
contenedor2.innerHTML = botonCreado2