Numero = parseInt(prompt("Digite un numero de dos o mas digitos: "))

if (Numero>9 && Numero<99 && Numero%2===0){
    alert("El regalo corresponde a un niño 😀")
}else {
    alert("El regalo coresponde a una niña 😊")
}

if (Numero>99 && Numero<9999 && Numero%2===0){
    alert("El regalo corresponde aun hombre 😋")
} else{
    alert("El regalo corresponde a una mujer 😙")
}