var salario_presidente;
var salario_director;
var salario_jefe_area;
var salario_administrativo;
salario_presidente=prompt("Introduce Salario Presidente: ");
alert("Salario Presidente: "+(salario_presidente));

salario_director=prompt("Introduce Salario Director: ");
alert("Salario director: "+(salario_director));

salario_jefe_area=prompt("Introduce Salario Jefe Área: ");
alert("Salario Jefe Área: "+(salario_jefe_area));

salario_administrativo=prompt("Introduce Salario Administrativo: ");
alert("Salario Administrativo: "+(salario_administrativo));

if (salario_administrativo<salario_jefe_area<salario_director<salario_presidente){
    alert("Todo funciona correctamente");
}else{
    alert("Algo falla en esta empresa");
}
