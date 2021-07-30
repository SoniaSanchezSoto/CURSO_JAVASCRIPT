// Funciones

function MiPrimerFuncion(){
    return 23;
};
console.log(MiPrimerFuncion());

function MiSegundaFuncion (a,b){
    return a + b;
}
console.log(MiSegundaFuncion(2,3));

function MiTercerFuncion (a,b){
    var mul = a * b;
    return mul - 2;
};
console.log(MiTercerFuncion(2,3));

// Funciones de tipo Expresión

var tipoDos  = function(){
    return 12;
}

console.log(tipoDos());

// Template Literals
function miNombre(nom){
    var nombre = `${nom}`;
    return nombre; 
}
console.log(miNombre('Sonia'));

// Expresión de Función
var saludar = function(nombre){
    console.log(`Hola persona llamada: ${nombre}`);
}
console.log(saludar('Sanchez'));