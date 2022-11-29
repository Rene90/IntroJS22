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
