Se te dará un arreglo de números enteros. Tu trabajo es tomar ese arreglo y encontrar un índice N donde la suma de los enteros a la izquierda de N sea igual a la suma de los enteros a la derecha de N.

Si no hay un índice que haga que esto suceda, devuelve -1.

Por ejemplo:
Supongamos que se te da el arreglo `{1,2,3,4,3,2,1}`:
Tu función devolverá el índice 3, porque la suma del lado izquierdo del índice (`{1,2,3}`) y la suma del lado derecho del índice (`{3,2,1}`) ambas son iguales a 6.

Veamos otro ejemplo.
Se te da el arreglo `{1,100,50,-51,1,1}`:
Tu función devolverá el índice 1, porque la suma del lado izquierdo del índice (`{1}`) y la suma del lado derecho del índice (`{50,-51,1,1}`) ambas son iguales a 1.

Último ejemplo:
Se te da el arreglo `{20,10,-80,10,10,15,35}`
En el índice 0 el lado izquierdo es {}
El lado derecho es `{10,-80,10,10,15,35}`
Ambos son iguales a 0 cuando se suman. (Los arreglos vacíos son iguales a 0 en este problema)
El índice 0 es el lugar donde el lado izquierdo y el lado derecho son iguales.

Nota: Por favor recuerda que en la mayoría de los lenguajes el índice de un arreglo comienza en 0.

Entrada
Un arreglo de enteros de longitud 0 < arr < 1000. Los números en el arreglo pueden ser cualquier entero positivo o negativo.

Salida
El índice más bajo N donde el lado izquierdo de N es igual al lado derecho de N. Si no encuentras un índice que cumpla estas reglas, entonces devolverás -1.

Nota
Si se te da un arreglo con múltiples respuestas, devuelve el índice correcto más bajo.