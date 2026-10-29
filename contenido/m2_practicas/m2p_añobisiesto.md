# Práctica: Año bisiesto

## Objetivo
Utilizar el pseudocódigo para esbozar el flujo lógico de un programa aplicando los principios del razonamiento deductivo. Este proceso ayuda a resolver problemas de forma sistemática dividiéndolos en premisas, extrayendo conclusiones y comprobando dichas conclusiones.

## Descripción
En esta actividad, aplicarás el razonamiento deductivo para escribir pseudocódigo. Comenzaremos con dos ejemplos guiados para ilustrar el proceso. Después, resolverás dos problemas de forma independiente, esbozando el flujo lógico y escribiendo el pseudocódigo para implementar tus soluciones.

---

## Planteamiento del probrema
Se le asigna la tarea de crear un programa para comprobar si un año dado es bisiesto. Un año es bisiesto si es divisible por 4, pero no todos los años divisibles por 100 son bisiestos a no ser que también sean divisibles por 400.

### Aplicación del razonamiento deductivo
1. Identificar las premisas:
   - Un año es bisiesto si es divisible por 4.
   - Si el año es divisible por 100, no es bisiesto a menos que también sea divisible por 400.

2. Analizar las premisas:
   - Si el año es divisible por 400: **sí** es bisiesto.
   - Si no es divisible por 400, pero sí por 100: **no** es bisiesto.
   - Si no cumple las anteriores, pero es divisible por 4: **sí** es bisiesto.
   - Cualquier otro caso: **no** es bisiesto.

3. Sacar una conclusión:
   - A partir del análisis, las condiciones para comprobar los años bisiestos pueden estructurarse de forma lógica en orden de especificidad para cubrir todos los casos.

4. Probar la conclusión:
   - Probamos la lógica con años bisiestos conocidos (ej. 2000, 1600) y años no bisiestos (ej. 1700, 1800, 1900).

5. Explicación del algoritmo:
   - **Entrada:** Se pide al usuario que introduzca un año.
   - **Comprobaciones condicionales:** Evaluamos en orden de caso más específico a general:
     - Primero, se comprueba si es divisible por 400.
     - Si no, se comprueba si es divisible por 100.
     - Si tampoco, se comprueba si es divisible por 4.

6. Pseudocódigo:
```pseudocode
Inicio Año_Bisiesto
    Entero: año
    Leer(año)

    Si año % 400 == 0 Entonces
        Escribir("Año bisiesto")
    Sino
        Si año % 100 == 0 Entonces
            Escribir("No es bisiesto")
        Sino
            Si año % 4 == 0 Entonces
                Escribir("Año bisiesto")
            Sino
                Escribir("No es bisiesto")
            FinSi
        FinSi
    FinSi
Fin Año_Bisiesto
```