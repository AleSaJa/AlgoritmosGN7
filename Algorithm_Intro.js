//Comparison
//Exercise 1:

let number = prompt("Escribe un número");
if (number>=10) {
    alert("True");
}else{
    alert("False");
}

//Exercise 2:

let number = parseInt(prompt("Escribe un número"));
if (number%9 == 0 || number%4 == 0) {
    alert("True");
}else{
    alert("False");
}

//String Function
//Exercise 1:

let tex = prompt("Dime una palabra");

function stringVacia (tex) {
    if(typeof tex == undefined || tex == "" ){
        alert("No hay texto");
    }else{
        alert(tex.charAt(0));
    }
}

stringVacia(tex);

//Exercise 2:

let cad1 = prompt("Introduce una cadena de caracteres:");
let cad2 = prompt("Introduce una cadena de caracteres:");

function checkTwoStringsSame(str1, str2) {
    if(str1.toLowerCase()===str2.toLowerCase()){
        alert("Verdadero, las dos cadenas son iguales");
    }else{
        alert("Falso, las dos cadenas son diferentes");
    }
}

checkTwoStringsSame(cad1,cad2);

//User Input

let n1 = parseInt(prompt("Introduce el primer numero:"));
let n2 = parseInt(prompt("Introduce el segundo numero"));

function cal(n1,n2){
    v1 = n1 + n2;
    v2 = n1 - n2;
    v3 = n1 * n2;
    v4 = n1 / n2;
    v5 = n1 % n2;
    alert("Los numeros son: "+n1+" y "+n2+"\nLa Suma es: "+v1+"\nLa Resta es: "+v2+"\nLa Multiplicacón es: "+v3+"\nLa División es: "+v4+"\nEl Resto es: "+v5);
}

cal(n1,n2);

//Practice
//Part 1:
let task = parseInt(prompt ("¿Cúantas tareas has realizado?"));
if (task>9 && task<= 14) {
alert("Good");}
if(task == 15){
alert("Excellent");}
if(task>6 && task<= 9){
alert("Insufficient");}
if(task>=0 && task<=6){
alert("Failed");}
else{
alert("Error");
}

//Part 2:
let arreglo = [0,0,0,0,0];
let auxiliar;

for(i=0;i<5;i++){
    arreglo[i]= parseInt(prompt("ingresa un numero al azar"));
}
function comparar(arreglo){
    for(j=0;j<5;j++){
        for(i=0;i<5-j-1;i++){
            if( arreglo[i]> arreglo[i+1]){
                auxiliar = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo [i+1]=auxiliar;
            }
        }
    }
    return auxiliar=arreglo[4];
}

alert("el mayor de los numeros es: " + comparar(arreglo));

//Part 3:
let arreglo = [0,0,0];
let auxiliar;

for(i=0;i<3;i++){
    arreglo[i]= parseInt(prompt("introduce el precio del articulo numero "+i+":"));
}
function comparar(arreglo){
    for(j=0;j<3;j++){
        for(i=0;i<3-j-1;i++){
            if( arreglo[i]> arreglo[i+1]){
                auxiliar = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo [i+1]=auxiliar;
            }
        }
    }//return arreglo[0],arreglo[1];
    alert("los precios de los articulos mas economicos para tu bolsillo son: "+ (arreglo[0]) + ", " + (arreglo[1]));
}

comparar(arreglo);