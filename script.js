function sumar(){
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value) //Busca el elemento por su id y saca su valor
    var resultado= num1 + num2  //resultado de la suma de las 2 variables

    alert("El resultado de la suma es: " + resultado) //alert envia un mensaje 
 }

 function restar(){
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value) 
    var resultado= num1 - num2 

    alert("El resultado de la resta es: " + resultado) 
 }
 function multiplicar(){
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value) 
    var resultado= num1 * num2 

    alert("El resultado de la multriplicacion es: " + resultado) 
 }
 function division(){
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value) 
    var resultado= num1 / num2  

    alert("El resultado de la division es: " + resultado) 
 }