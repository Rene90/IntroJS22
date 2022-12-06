console.log("Clase de objetos")
//Objetos litelares

let objetoLiteral = {
    propiedades1:"Mi valor",
    propiedades2:31,
    propiedades3:true,
    //es posible integrar funciones a mi objeto literal
    miFuncion: ()=> 'Este es el return implicito de la arrow function'
}

console.log(objetoLiteral)

let alumno = {
    nombre:"Pilar",
    edad:18,
    ocupacion:"estudiante",
    mayor:true,
    dormir: ()=>"Estoy durmiendo ZZZZZZZZZZ",
    comer: ()=>"Estoy comiendo nam nam"
}


//Manera 1 para acceder a propiedades NOTACION PUNTO
console.log(`La estudiante ${alumno.nombre}, tiene ${alumno.edad} y su ocupacion es: ${alumno.ocupacion}`)
//Manera 2 para acceder a propiedades NOTACION CORCHETE [] (manera menos comun que la manera 1)
let alumnos = ["Maite","Pilar","Byron","Andres"]
console.log(alumnos[1])// Al final los arreglos tambien son objetos de la clase Array, por eso la notacion corchete tambien sirve

console.log(`La estudiante ${alumno["nombre"]}, tiene ${alumno["edad"]} y su ocupacion es: ${alumno["ocupacion"]}`)

console.log(`Soy ${alumno.nombre} y ${alumno.dormir()}`)
console.log(`Soy ${alumno["nombre"]} y ${alumno["dormir"]}`)//Tener cuidado de usar la notacion corchete al querer acceder a una funcion del objeto literal.
console.log(alumnos)
//metodo funcional de un objeto Array o arreglo
alumnos.forEach((elemento,indice,arreglo)=>{
    console.log(elemento)
})
const texto = "Francisco participa en clase"
console.log(texto.toUpperCase())
//EN JAVASCRIPT TODOOOOO ES UN OBJETO !!!! de aqui el hecho de que javascript sea un lenguaje de programacion orientada a objetos.

//CLASES
// LAS CLASES SON PLANTILLAS DE UN OBJETO QUE COMPARTE ATRIBUTOS Y METODOS O FUNCIONES
//lAS CLASES ESTAN MUY PRESENTES DENTRO DE LOS LENGUAJES DE PROGRAMACION ORIENTADO A OBJETOS

//definir de manera literal otro objeto de estudiante
let alumno2 = {
    nombre:"Maite",
    edad:15,
    ocupacion:"estudiante",
    mayor:false,
    dormir: ()=>"Estoy durmiendo ZZZZZZZZZZ",
    comer: ()=>"Estoy comiendo nam nam"
}
class miClase{
    //El constructor me inica un objeto con ciertos atributos o propieades, o en el casp de que sea un constructor vacio, solo me crea el objeto.
    /*constructor(){
        this.propiedad1 = "Esta el propiedad 1 por default"
        this.propiedad2 = "Esta es la propiedad 2 por default"
    }*/ //ESTE ES UN CONSTRUCTOR VACIO
    constructor(pr1,pr2){
        this.propiedad1 = pr1
        this.propiedad2 = pr2

    }//CONSTRUCTOR QUE RECIBE PARAMETROS Y LOS ASIGNA A LAS PROPIEDADES DEL OBJETO
    miMetodo1(){
        return "Saludos desde el metodo 1"
    }
    miMetodo2(){
        return "Saludos desde el metodo 2"
    }

}


var objeto1 = new miClase("PERICO","VACA")
console.log(objeto1)
console.log(objeto1.propiedad1)//PERICO
console.log(objeto1.miMetodo1())