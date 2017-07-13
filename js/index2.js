/*
Given a string of digits, return all of the possible non-empty letter combinations that the number could represent. The mapping of digits to letters is the same as you would find on a telephone's buttons, as in the example below:
The resulting array should be sorted lexicographically.
Example
For buttons = "42", the output should be
pressingButtons(buttons) = ["ga", "gb", "gc", "ha", "hb", "hc", "ia", "ib", "ic"].
Input/Output
[time limit] 4000ms (php)
[input] string buttons
A string composed of digits ranging from '2' to '9'.
Guaranteed constraints:

0 ≤ buttons.length ≤ 7.
[output] array.string
*/
var teclas = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]; //declaramos el array con las letras de los numeros.
 var pressingButtons = function () {//la funcion ordena el numero lexicograficamente.
   //declaramos e inicializamos las variables a usar.
   var num = prompt('ingrese por favor un numero a marcar de dos digitos que tenga numeros del 2 al 9: '),dig1 = parseInt(num[0]), dig2 = parseInt(num[1]),output=[],button1 = teclas.slice((dig1-2),(dig1-1)), button2 = teclas.slice((dig2-2), (dig2-1)),i,j;

  for ( i = 0; i < button1[0].length; i++) {//desarrollamos los bucles para iterar en las diferentes opciones de cada boton/numero

      for ( j= 0; j < button2[0].length;j++) {

      output.push((button1[0][i] + button2[0][j])); //ingresamos los valores en un array
      }

  }
  //mostramos al usuario la conversion de su numero.
  alert('el numero ingresado esta ordenado de la sieguiente manera ' + output);
};
//ejecutamos la funcion.
pressingButtons();
