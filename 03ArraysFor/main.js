console.log("Hola desde el archivo main.js")

//Maneras de crear un arreglo
var arregloVacio = [] //manera mas comun
//Creando un arreglo de la clase Array
var arregloVacio1 = new Array() //el arreglo viene siendo un objeto de la clase Array
console.log(arregloVacio)
var alumnos = ["Cristian","Juan","Marcos","Maite","Byron"]

console.log(alumnos[2]) //Imprime a Marcos porque esta en el indice 2
console.log(alumnos[4])//Imprime a Byron (ultimo elemento) HARDCODE

console.log(alumnos[alumnos.length-1])//Imprime a Byron (ultimo elemento)
var ultimoAlumno=alumnos.pop()//Elimina el ultimo elemento del arreglo y lo regresa para que lo guardemos
console.log(alumnos)
alumnos.push("Byron Recargado")//Agrega un elemento al final del arreglo
console.log(alumnos)
alumnos.unshift("Jaime")//Agrega un elemento al principio del arreglo
console.log(alumnos)
var primerAlumno = alumnos.shift()//Elimina el primer elemento del arreglo y lo regresa (como pop)
console.log(alumnos)
console.log(ultimoAlumno+" Este es el ultimo")
console.log(primerAlumno+" este es el primer alumno")
// ['Cristian', 'Juan', 'Marcos', 'Maite', 'Byron Recargado']
//SPLICE
//borrar
//quiero borrar a marcos (indice 2)
alumnos.splice(2,1)//indice 2 , elimino 1
console.log(alumnos)
// ['Cristian', 'Juan', 'Maite', 'Byron Recargado']
alumnos.splice(1,1)
console.log(alumnos)
// ['Cristian', 'Maite', 'Byron Recargado']
alumnos.splice(1,2)//indice 1, elimino 2
console.log(alumnos)
alumnos.push("Bryan","Matias","Rene","Pablo")
console.log(alumnos)
// ['Cristian', 'Bryan', 'Matias', 'Rene', 'Pablo']
alumnos.splice(3,0,"Jeremias")
console.log(alumnos)
//['Cristian', 'Bryan', 'Matias','Jeremias', 'Rene', 'Pablo']
alumnos.splice(2,0,"Maite")
console.log(alumnos)
//['Cristian', 'Bryan', "Maite",'Matias','Jeremias', 'Rene', 'Pablo']
alumnos.splice(5,1,"Daniel","Alejandra")//Remplaza a Rene y Alejandra por Daniel(elimina y agrega al mismo tiempo)
console.log(alumnos)
//['Cristian', 'Bryan', 'Maite', 'Matias', 'Jeremias', 'Daniel', 'Alejandra', 'Pablo']
var alumnos2 = ["Angel","Mia","Benjamin"]
var alumnos3 = ["Roberto","Rolando"]
var alumnosUnidos = alumnos.concat(alumnos2,alumnos3) //une o concatena varios arreglos
console.log(alumnosUnidos)

console.log(alumnosUnidos.reverse())//Invierte los elementos de mi arreglo

var oracion = "El grupo de js me cae muy bien"
console.log(oracion[0])//Me imprime la primera letra de mi string
console.log(oracion[0]+oracion[1])//HARDCODE porque nosotros ponemos los indices solo para este ejemplo
var palabras = oracion.split(' ') //divide string de acuerdo al caracter que le pasemos como parametro
console.log(palabras[5])//Esto me imprime la primera palabra
console.log(palabras)
var oracion2 = "rene.manzano@hotmail.com"
var nombreso = oracion2.split('@')
console.log(nombreso[0])
var arreglo2d= [["Juan","Pablo"],["Rene","Roberto"]]
console.log(arreglo2d[0]) //me trae el primer arreglo
console.log(arreglo2d[0][0])//Me trae a Juan que es el primer elemento del primer arreglo
console.log(arreglo2d[1][1])//los arreglos de arreglos en dos dimensiones tambien se llaman matrices
//CICLOS
//Son lineas de codigo que se repiten determinada cantidad de veces

/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)*/ //Esta manera NO ES VIABLE

//for (contador se llama i por convencion) principio,fin,paso
for(let i= 0;i<alumnosUnidos.length;i++){
    //console.log(i)
    console.log(alumnosUnidos[i])
}
console.log("IMPRIMIENDO ALUMNOS PAR")
for(let i= 0;i<alumnosUnidos.length;i=i+2){//Imprime los alumnos en la posicion par
    //console.log(i)
    console.log(alumnosUnidos[i])
}
console.log("IMPRIMIENDO ALUMNOS DE REVERSA")
for(let i=alumnosUnidos.length-1;i>=0;i--){
    console.log(alumnosUnidos[i])
}
var calificaciones = [6,8,9,10,5,9,9,6.5,7,8]
var calificaciones2 = [7,10,9,10,4,4,9,10,8.7,6.2,7,4,10,10]
var grupos = [calificaciones,calificaciones2]
var sumatoria = 0
/*for(let i=0;i<calificaciones.length;i++){
    sumatoria = sumatoria +calificaciones[i]
}
var promedio = sumatoria/calificaciones.length
console.log(promedio)*/
var numElementos= 0

for(let i=0;i<grupos.length;i++){
    
    for(let j=0;j<grupos[i].length;j++){
        sumatoria = sumatoria + grupos[i][j]
        numElementos++
    }
    
}
var promedioGeneral = sumatoria/numElementos
console.log(promedioGeneral)
//Metodos funcionales
//otra manera de recorrer un arreglo es con su metodo funcional forEach

calificaciones2.forEach((elemento,indices,arreglo)=>{
    console.log(elemento)
    
})

//Ciclo while
var contadorWhile=0
while(contadorWhile<5){
    console.log(contadorWhile)
    contadorWhile++
}

// RETO 1 PLATILLOS
// Crea un arreglo que contenga los siguientes platillos:
// 1) Enchiladas
// 2) Taco
// 3) Tamal
// 4) Pozole
// 5) Barbacoa
// 6) Guacamole
//
// 1. Mediante un ciclo FOR, muestra todos los platillos (recuerda la propiedad length)
// 2. Mediante un ciclo FOR y condicional IF, muestra sólo el Pozole y la Barbacoa
// 3. Mediante un ciclo FOR y conficional IF, muestra sólo los elementos impares
// 4. Mediante únicamente un ciclo FOR, muestra los elementos que sean pares


//RETO 2 FIZZBUZZ
// Mostrar en consola los números del 1 al 100
// Si el numero es divisible entre 3 imprimir Fizz
// Si el numero es divisible entre 5 imprimir Buzz
// Si el numero es divisible entre 3 y 5 imprimir FizzBuzz
// (Recuerda el uso del operador módulo %)
//---- 👍 -----
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
// ...
// 15 FizzBuzz
//----- 🚫 -----
// 15 fizz
// 15 buzz
// 15 fizzbuzz






