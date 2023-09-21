x = parseInt(prompt("Bienvenido a almacenes Costa Azul. Digite el valor camisa: "));
y = parseInt(prompt("Digite el valor pantalon: "));


z = parseInt(prompt("Bienvenido a Tigo. Digite el valor del celular: "));

SubTotal = x + y
Total = SubTotal * 14 / 100
Resultado = Total + z

alert("El subtotal de la compra en el almacen Costa Azul es de: " + SubTotal);
alert("El descuento del 14% de su compra da un total de: " + Total + " a pagar");
alert("El total que gasto en el almacen Costa Azul y Tigo es de: " + Resultado);
