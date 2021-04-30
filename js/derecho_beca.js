var distancia_escuela;
var numero_hermanos;
var salario_familiar;

alert("Programa de becas Año 2017");
distancia_escuela=prompt("Introduce la distancia a la escuela en km: ");
alert(distancia_escuela);

numero_hermanos=prompt("Introduce el n° de hermanos en el centro: ");
alert(numero_hermanos);

salario_familiar=prompt("Introduce salario anual bruto ");
alert(salario_familiar);

if(distancia_escuela>40 && numero_hermanos>2 && salario_familiar<=20000){    
    alert("Tienes derecho a beca");
}else{
    alert("No tienes derecho a beca");
}
