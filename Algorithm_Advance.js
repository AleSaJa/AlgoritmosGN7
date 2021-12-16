//Exercise #1

function maxnumber(){
    let numbers=[3,5,7,1,6];
    var Max= Math.max.apply(null,numbers); //Función math max regresa el valor maximo en un arreglo
    console.log(Max);
}

maxnumber();

//Exercise #2

let valores=[3,5,7,1,6]
valor = valores.sort(function(x,y){
    return y - x; // x-y regresa orden ascendente, y-x regresa orden descendente
});

console.log(valor);

//Exercise #3

function maxnumber(){
    let numbersA=[3,5,7,1,6];
    let numbersB=[10,4,2,5,1];
    var maxA= Math.max.apply(null,numbersA);
    var maxB= Math.max.apply(null,numbersB);
    if (maxA > maxB){//Encontrar la variable más alta de cada arreglo y comparar entre estas dos
        console.log(maxA);
    }else{
        console.log(maxB);
    }
}

maxnumber();

//Arrays
//Exercise #1

var arr = ["This", "is", "a", "sentence."];

function printOutString() {
    console.log(arr.join(" ")) //arr.join para unir los elementos de una cadena
}

printOutString();

//Exercise #2

var arrayNumber = [1, 2, 4, 5];

function doblueArray() {
    console.log(arrayNumber);
    arrayNumber[0] = arrayNumber[0]*2;
    arrayNumber[1] = arrayNumber[1]*2;
    arrayNumber[2] = arrayNumber[2]*2;
    arrayNumber[3] = arrayNumber[3]*2;
    console.log(arrayNumber);
}

doblueArray();

//Exercise #3

var arrayNumber3 = [1, 2, 3, 4];

function sumAndProduct(num){
    console.log(num);
    aux1 = aux2 = 0;
    aux1 = num[0]+aux1;
    aux1 = num[1]+aux1;
    aux1 = num[2]+aux1;
    aux1 = num[3]+aux1;
    aux2 = num[0]*num[1]*num[2]*num[3];
    console.log("The sum is: "+aux1+"\nThe product is: "+aux2);
}

sumAndProduct(arrayNumber3);

//Exercise #4
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];

console.log(student1Courses);
console.log(student2Courses);

function comparation(string1, string2){
    if(string1[0]===string2[0])
    console.log(string1[0]);
    if(string1[1]===string2[1])
    console.log(string1[1]);
    if(string1[2]===string2[2])
    console.log(string1[2]);
}

//Exercise #5

var people = ["Maria", "Dani", "Luis", "Juan", "Camila"]; //Se define el arreglo
function exercise5(){
    console.log("La lista es: "+people);
    console.log("El elemneto fuera de la lista es: "+people.splice(1,1)+"\nLa nueva lista es: "+people); //Se elimina el elemento en el indice 1, Dani de la lista.
    console.log("El elemneto fuera de la lista es: "+people.splice(2,1)+"\nLa nueva lista es: "+people); //Se elimina el elemento en el indice 2, Juan. De la nueva lista
    aux = people.splice(1,1); //Se elimina el elemento en el indice 1, Luis. De la nueva lista y se almacena en la variable auxiliar
    people.unshift(aux); //Se inserta Luis al inicio de la lista
    console.log("El elemneto fuera de la lista es: "+aux+"\nLa nueva lista es: "+people);
    people.push(prompt("Por favor, ingresa tu nombre:")); //Se inserta al final de la lista el nombre del usuario
    console.log("La nueva lista es: "+people);
    console.log("El indice de Maria es: "+people.indexOf('Maria')); //Se imprime el indice donde se encuentra Maria en la lista
    return;
}

exercise5();

//Sorting
//Exercise #1

var nombres = ["Virginia", "Sergio", "Alberto", "Flor", "Itzel", "Edgar"];
console.log(nombres);
valor = nombres.sort();
console.log(valor);

//Code Refactoring & Fixing Code
//Exercise #1

let list=[6,2,9]; //se crea el arreglo

function length(list){
    if(list.length === 0) {//Funcion .length que da el tamaño del arreglo
        return 0; //Devuelve 0 si el arreglo esta vacio
    } return list.length; //Devuelve el tamaño del arreglo
}

console.log(length(list)); //se invoca la funcion

//Exercise #2

let grade = prompt("Dame tu grado: "); //se solicita a usuario ingresar su grado
function gradeUser(grade) {
    if(grade <= 6 && grade >= 0){
        console.log("Fallaste");
    }if(grade > 6 && grade <= 9){
        console.log("Insuficiente");
    }if(grade > 9 && grade <= 14){
        console.log("Bueno");
    }if(grade == 15){
        console.log("Excelente");
    }if(grade < 0 || grade > 15){
        console.log("Error, fuera de rango");
    } //Error si el usuario no ingresa un valor dentro del rango
}
gradeUser(grade); //LLamada a la funcion