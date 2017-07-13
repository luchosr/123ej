/*
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example
For a = [2, 3, 3, 1, 5, 2], the output should be
firstDuplicate(a) = 3.
There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than than second occurrence of 2 does, so the answer is 3.
For a = [2, 4, 3, 5, 1], the output should be
firstDuplicate(a) = -1.
Input/Output
[time limit] 4000ms (php)
[input] array.integer a
Guaranteed constraints:
1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ a.length.
[output] integer
The element in a that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return -1.
*/


var a = [2, 3, 3, 1, 5, 2], b = [2, 4, 3, 5, 1],compared, duplicated = [],counter = 0,minDup,altArray,i,j;

var firstDuplicate = function(array){
 altArray = array.slice();//duplicamos el array que ingresamos por parametro.
  counter = 0;// establecemos un contador de comparaciones.
  for ( i = 0; i < altArray.length;  ) {
    //iniciamos el bucle para alamacenar elementos a comparar
    compared = altArray.splice(0,1);
    counter ++;
    for ( j = 0; j < altArray.length; j++) {
      //comparamos el elemento almacenado con el resto del array.
        if (compared == altArray[j]) {
          //realizamos una comparacion no estricta, ya que dos elementos de un
          //array se consideran objetos y por definicion no existen 2 objetos iguales.
           duplicated.push((j+counter));
           //almacenamos la posicion del elemento duplicado en un array.
        }
    }
  }
  if (duplicated.length !== 0) {
  //si el array de duplicados tiene algun elemento, almacenamos la posicion como indice.
     var indice = Math.min.apply(Math, duplicated);//aqui desestructuramos el array para utilizar la funcion Math.min()
    //vaciamos el array de duplicados para un uso posterior.
    duplicated =[];
    //retornamos el elemento cuyo duplicado esta a menor distancia del inicio del array.
    return a[indice];
  }
  else {//en caso de no encotrar elementos duplicados, se retorna el valor -1.
    return -1;
  }
};
