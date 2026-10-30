# Descomposición del problema
- [LECTURA](#lectura)
- [RESUMEN DEL VIDEO](#resumen-del-video)
- [INFORMACIÓN DE LAS DIAPOSITIVAS](#información-de-las-diapositivas)

*** 

# Lectura
Introducción
La descomposición de problemas es una estrategia utilizada en el desarrollo de software y otros campos para dividir problemas complejos en partes más pequeñas y manejables. Este método facilita la comprensión, gestión y resolución de retos complejos. Por ejemplo, cuando los desarrolladores se enfrentan a un problema crítico extendido por toda una aplicación, descomponer el problema en componentes específicos, como la autenticación de usuarios o el procesamiento de pagos, permite centrarse más en la solución de problemas y resolverlos de forma más eficaz.

Ventajas de la descomposición de problemas complejos
La descomposición de problemas ofrece varias ventajas. En primer lugar, simplifica la depuración al aislar partes más pequeñas del problema, lo que facilita la identificación y solución de problemas. En segundo lugar, mejora la implementación al permitir a los desarrolladores construir y probar componentes individuales por separado, reduciendo errores y mejorando la colaboración entre los miembros del equipo. En tercer lugar, mejora el mantenimiento al permitir actualizaciones o cambios en partes específicas sin interrumpir todo el sistema, lo que reduce el tiempo de inactividad y mejora la estabilidad general del sistema.

Técnicas de descomposición de problemas
Dos técnicas principales para descomponer problemas son el enfoque descendente y la modularización.

Enfoque descendente: esta técnica parte de una visión general del problema y lo descompone gradualmente en componentes más detallados. Es similar a la creación de un esquema para un ensayo, empezando con un enunciado general y añadiendo subtemas. En la práctica, puede consistir en fijar un objetivo general (por ejemplo, construir un sitio de comercio electrónico) y luego dividirlo en tareas más pequeñas, como diseñar la página de inicio, desarrollar páginas de productos e implementar el proceso de pago.

Modularización: la modularización divide un problema en unidades o módulos autónomos, cada uno de los cuales realiza una función específica. Este enfoque permite el desarrollo independiente y el perfeccionamiento de cada módulo, simplificando la gestión de problemas complejos. Por ejemplo, separar la lógica de autenticación en sus módulos puede ser beneficioso cuando varias páginas del sitio web requieren la misma funcionalidad.

Conclusión
Los problemas complejos son más fáciles de gestionar si se utilizan técnicas de descomposición de problemas como el enfoque descendente y la modularización. Estos métodos proporcionan estructura, reducen los errores, mejoran la colaboración y aumentan la eficacia de la gestión y el mantenimiento de sistemas complejos.

***

# RESUMEN DEL VIDEO
La descomposición de problemas en programación consiste en dividir un problema complejo en partes más pequeñas y manejables para facilitar su comprensión, gestión y solución.

## Conceptos y beneficios de la descomposición
- Permite localizar y corregir errores más rápidamente al aislar componentes específicos del software.
- **Facilita la implementación** al desarrollar y probar partes pequeñas de manera independiente, reduciendo errores.

## Colaboración y mantenimiento
- Permite que varios desarrolladores trabajen simultáneamente en diferentes componentes, mejorando la eficiencia.
- Facilita el mantenimiento del código, ya que los cambios en un componente aislado no afectan al resto del sistema, reduciendo el tiempo de inactividad.

## Pasos para descomponer problemas
- Identificar claramente el problema o el objetivo a resolver.
- Dividir el problema principal en partes más pequeñas y manejables, analizando y abordando cada una por separado.

## Ejemplo práctico
- En un sistema de gestión de inventarios, se descompuso el problema en seguimiento de *stock*, gestión de proveedores y proceso de cumplimiento de pedidos, lo que permitió un desarrollo más eficiente y mejoras específicas.

***

# Información de las diapositivas

## Learning Objective
By the end of this video, you will be able to:
- Explain the concept and benefits of decomposing complex problems.

## Problem Decomposition
The process of breaking down a complex problem into smaller, more manageable parts.

## Problem Decomposition Example: Order Processing System
- Breaking down into component parts.
- Simplified implementation.
  * Simplifies development and reduces errors.
  * Parts of code can be tested independently.
  * More than one developer can work on the code simultaneously.
- Improved ease of maintenance.
  * Parts updated independently.
  * Update components without having to shut down system.
  * Reduces downtime.

## Steps to Decompose Software
1. Identify the problem goal.
2. Break it down into parts.
3. Analyze and address.
4. Integrate the solution.

## "Pures Grocery" Inventory System
1. Goal: Update the order management system.
2. Create a module to track stock levels.
3. Create a system to manage and update supplier information.
4. Integrate the order fulfillment process.