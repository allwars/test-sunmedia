# Ejercicio 1

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?
el "var" son modificadas las variables tanto dentro como fuera del bloque por lo que saldrá 5 salidas y la última con el valor de la último valor.
Con "let" al declarar la variable no se puede modificar por lo que se mantiene las salidas con los valores aportados

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?
Cambiar el var por el let:

for (let i = 0; i < 5; i++) {
    }

```
    > 0
    > 1
    > 2
    > 3
    > 4
```