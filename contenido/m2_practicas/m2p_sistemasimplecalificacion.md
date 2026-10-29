# Práctica: Sistema simple de calificación

## Objetivo
Utilizar el pseudocódigo para esbozar el flujo lógico de un programa aplicando los principios del razonamiento deductivo. Este proceso ayuda a resolver problemas de forma sistemática dividiéndolos en premisas, extrayendo conclusiones y comprobando dichas conclusiones.

## Descripción
En esta actividad, aplicarás el razonamiento deductivo para escribir pseudocódigo. Comenzaremos con dos ejemplos guiados para ilustrar el proceso. Después, resolverás dos problemas de forma independiente, esbozando el flujo lógico y escribiendo el pseudocódigo para implementar tus soluciones.

---


Planteamiento del problema:
Imagine que está creando un programa para determinar la calificación en letras de un estudiante en base a su puntuación numérica. El sistema de calificación es el siguiente:

Una puntuación de 90 o más es una "A".

Una puntuación de 80 a 89 es una "B".

Una puntuación de 70 a 79 es una "C".

Una puntuación de 60 a 69 es una "D".

Una nota inferior a 60 es un suspenso.

Aplicación del razonamiento deductivo:
1. Identificar las premisas:

Una puntuación de 90 o más se clasifica como "A".

Una puntuación entre 80 y 89 se clasifica como "B".

Una puntuación entre 70 y 79 se clasifica como "C".

Una puntuación entre 60 y 69 se clasifica como "D".

Una puntuación inferior a 60 se clasifica como "F".

2. Analice las premisas:

Las calificaciones son mutuamente excluyentes y abarcan todas las puntuaciones posibles.

Cada intervalo de puntuaciones puede comprobarse mediante una serie de comprobaciones condicionales.

3. Saque una conclusión:

Comprobando los rangos de puntuación en orden descendente de mayor a menor, se puede asignar la letra de calificación correcta.

4. Pruebe la conclusión:

Pruebe la lógica con diferentes puntuaciones para ver si entran en la categoría de calificación correcta (por ejemplo, 95 debería ser "A", 85 debería ser "B").

5. Explicación:

Entrada: Se pide al usuario que introduzca una puntuación numérica.

Comprobaciones condicionales: Utilizando las premisas:

Comprobar si la puntuación es igual o superior a 90 para asignar una "A".

Compruebe si la puntuación está entre 80 y 89 para asignar una "B".

Continúe comprobando los rangos hasta cubrir todos los casos.

Salida: Basándose en las comprobaciones, el programa asigna la calificación apropiada.

6. Escriba el Pseudocódigo:

Start 
Ask user for score 
If score is greater than or equal to 90
 Display to user "Grade A" 
Otherwise If score is greater than or equal to 80
Display to user "Grade B" 
Otherwise If score is greater than or equal to 70
    Display to user "Grade C" 
Otherwise If score is greater than or equal to 60
    Display to user "Grade D" 
Otherwise
    Display to user "Grade F" 
End