N = parseInt(prompt("Digite un numero: "))
D = parseInt(prompt("Digite otro numero: "))

if (N%D*D){
    alert("eL numero: " +N+ " es 2veces divisible por: " +D+ " y da como resultado 2")
}

if (N%D){
    alert("eL numero: " +N+ " es divisible por: " +D+ " y da como resultado 1")
} 

else {
    alert("No son divisibles y da como resultado: 90")
}