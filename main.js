/*
Funciones esenciales del proceso a simular.
Objetos de JS 
Arrays
Métodos de búsqueda y filtrado sobre el Array
Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().
*/

//Proyecto: Lista de personas

let listaPersonas = []; //array que contiene los objetos personas

function persona(nombre, apellido, fechaNacimiento, edad, genero) { //contructor de objeto persona

    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.genero = genero;

}

