x = parseInt(prompt("Cantidad de personas: "))
cont = 0

for(i = 1; i <= x; i++){
    a = prompt("Persona "+i+" peso: ");
    b = prompt("Persona "+i+" Estatura: ");
    cont++
    cont = a + b

}
alert("el promedio IMC de las personas es de: "+cont);