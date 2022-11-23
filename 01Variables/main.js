console.log("HOLA ESTE ES MI PRIMER PROGRAMA JS");
console.log("Mexico empato contra Polonia");
//JS es orientado a objetos
//Variables
// x+2     Mi variable x puede agarrar cualquier valor (matematicas)
//Para definir/declarar una variable se utiliza la palabra reservada var
var x = "Maite";
var nombre = "Rene";
var alumno;
//No hay necesidad de volver a declarar una variable (poner var de nuevo)
alumno= "Francisco";
alumno= "Maria";//tipo string
//Las variables son mutables, es decir pueden cambiar su valor
console.log(nombre); //aqui me imprime Rene, no nombre
var edad = 31; // tipo de variable int (numero entero)
var edads = "31";//tipo string
const altura = 1.75; //flotante o numero real (numero con decimales)
//const declara variables que no cambiaran (constantes)
//altura =1.80 //ESTO ME VA A MOSTRAR ERROR
var peso = 62;
peso =65;
let pais = "Mexico";
pais = "Canada";
console.log(x)
//Una variable declarada fuera de cualquier bloque de codigo, tiene un alcance global

if(pais=="Canada"){
    let alumnolocal = "Franciso esta dentro del bloque"; // variable definida dentro de un bloque con let, su alcance es local
    var alumnoNolocal ="Cristian no es local y esta dentro del bloque"

    console.log("Este es un bloque de codigo");
    console.log(alumnolocal)
    console.log(alumnoNolocal)
}

alumnoNolocal="Cristian no es local y ya salio del bloque";
console.log(alumnoNolocal);
//console.log(alumnolocal)//Esto genera error porque la variable local deja de existir afuera del bloque de codigo.
//en un ciclo que repita varias veces un bloque de codigo, se usa let para definir el contador
//manejo de let en lugar de var (cuando se requiera) hace mas eficiente el programa


if(pais=="Mexico"){
    console.log("Este es otro bloque de codigo")
}

var programador = "Byron";

if(pais =="Canada"){
    programador = "Maria"
    console.log(programador)
}
console.log(programador)
//Tipo de datos
//numero 
var numeroEj = 1990
console.log(typeof numeroEj)
//string o cadena de caracteres
var oracion ="Este grupo si pone atencion... a veces";
console.log(typeof oracion);

//booleano (true/false)
var bol = true;
var bols = "true";//esto es un texto o string
var bolfalse = false;

if(bol){// le paso el boleano de true y SIEMPRE se ejecutara
    console.log("Siempre se va a ejecutar");
}
//Arreglo o arrays
var alumnos= ["Maria","Cristian","Maite","Marcos",16,18,16,15, true]
console.log(alumnos[1]);
console.log(alumnos[0]);
//Objetos

var objeto = {sensei1: "Rene",
              sensei2:"Daniel",
              listaAlumnos:alumnos

}
console.log(objeto["sensei1"])//Manera 1 (NO TAN COMUN)
console.log(objeto.sensei1)//Manera 2 (SI ES COMUN)
//Esta es La Base de la PROGRAMACION ORIENTADA A OBJETOS!!!
//Operadores aritmeticos

//Suma
var suma = 10+5;
console.log(suma)
var sumas = "10"+"5"//"105" concatenar texto
console.log(sumas+suma)//sumo texto con numero (Lo sigue uniendo)  
console.log(parseFloat(sumas)+suma)//primero transformo a numero y despues se lo sumo a 15
console.log(sumas+String(suma))//"10515"  primero trandormo suma a texto y despues concateno

var resta =20-10;
var multiplicacion = 10*2;
var division = 10/2
console.log(division)
var division2 = 10/3
console.log(division2)
//residuo o modulo
var residuo = 6%2 // 0 ya que nos el resiudo de la division 6/2
var residuo2 = 6%4// 2 , porque es lo que nos sobra
var residuo3=10%3// 1, es lo que queda de la division con el resultado entero
var equipo = prompt("Dame tu equipo de futball favorito")

console.log(equipo)



















