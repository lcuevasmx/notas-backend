# Pseudocódigo y Diagramas de Flujo

## Diagrama de Proceso de Login
![Diagrama de flujo de autenticación](../assets/diagramas/flujo_login.png)

## Algoritmo de Validación de Usuario
```text
INICIO
    LEER usuario, contrasena
    SI usuario == "admin" Y contrasena == "1234" ENTONCES
        ESCRIBIR "Acceso concedido"
    SINO
        ESCRIBIR "Credenciales incorrectas"
    FIN_SI
FIN
```