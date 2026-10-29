# Práctica: Inicio de sesión

## 1. Definición del problema
Crear un sistema de login donde los usuarios puedan introducir su nombre de usuario y contraseña. El sistema debe validar estas credenciales y permitir o denegar el acceso.

## 2. Identificar los procesos clave
* Introducir nombre de usuario y contraseña.
* Validación de credenciales.
* Conceder o denegar el acceso en función de la validación.

## 3. Diagrama de flujo y Pseudocódigo

<div class="comparativa-codigo">

```mermaid
flowchart TD
    A([Inicio]) --> B[/Introducir Usuario y Contraseña/]
    B --> C{¿Credenciales válidas?}
    
    C -- Sí --> E[\"Acceso concedido"\]
    C -- No --> F[\"Acceso denegado"\]
    
    F --> B
    E --> G([Fin])
```

```pseudocode
Inicio Inicio_Sesion
    // Declaración de variables
    Cadena: Usuario, Contraseña
    Booleano: esValido

    Hacer
        // Entrada de datos
        Leer(Usuario)
        Leer(Contraseña)

        // Validar datos
        Si Usuario == "correcto" Y Contraseña == "correcta" Entonces
            Escribir("Acceso concedido")
            esValido <- Verdadero
        Sino
            Escribir("Acceso denegado")
            esValido <- Falso
        FinSi
    Mientras esValido == Falso
Fin Inicio_Sesion
```
</div>