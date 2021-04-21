alert("Asignaturas Carrera Matemáticas Año 2021");
alert("Asignaturas: Algebra Lineal - Cálculo Diferencial - Estadistica - Probabilidad - Lógica MAtemática - Variable Compleja");
var asignatura=prompt("Escribe la asignatura escogida: ");

asignatura=asignatura.toLowerCase();

if  (asignatura=="algebra lineal" || asignatura=="cálculo diferencial"|| asignatura== "estadistica"|| asignatura== "probabilidad"|| asignatura=="lógica matemática"|| asignatura== "variable compleja"){
    alert("Asinatura elegida " + asignatura);
}else{
    alert("La asignatura escogida no está contemplada");
}