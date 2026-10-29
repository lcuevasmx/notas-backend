# Guía Rápida de Sintaxis Markdown

Documento de referencia para la maquetación y formato de notas de estudio en la bitácora.

---

## 1. Encabezados (Títulos)

Usa el símbolo `#` seguido de un espacio. A menor número de `#`, mayor jerarquía.

* `# Título Principal (H1)` - Usar solo uno por documento
* `## Sección (H2)`
* `### Subsección (H3)`
* `#### Tema específico (H4)`

---

## 2. Formato de Texto

* **Texto en negrita:** Usar dos asteriscos `**texto**` o dos guiones bajos `__texto__`.
* *Texto en cursiva:* Usar un asterisco `*texto*` o un guión bajo `_texto_`.
* ***Texto en negrita y cursiva:*** Usar tres asteriscos `***texto***`.
* ~~Texto tachado:~~ Usar dos virgulillas `~~texto~~`.

---

## 3. Listas

### Listas no ordenadas (Viñetas)
Usa asteriscos `*`, guiones `-` o signos de más `+`:

* Elemento sin espacio **con asterísco**
* Elemento sin espacio **con asterísco**
  * Sangría de 2 espacios **con asterísco**
  * Sangría de 2 espacios **con asterísco**

- Elemento sin espacio **con guión**
- Elemento sin espacio **con guión**
  - Sangría de 2 espacios **con guión**
  - Sangría de 2 espacios **con guión**

* Elemento sin espacio **con asterísco**
* Elemento sin espacio **con asterísco**
  - Sangría de 2 espacios **con guión**
  - Sangría de 2 espacios **con guión**

### Listas ordenadas (Numeradas)
Usa números seguidos de un punto:

1. Número 1 sin espacio
2. Número 2 sin espacio
3. Número 3 sin espacio

---

## 4. Bloques de Código y Sintaxis

### Código en línea
Usa una comilla invertida simple al inicio y al final para resaltar variables o comandos dentro de un párrafo:
Aplica el comando `git status` o la variable `usuarioNombre`.

### Bloques de código con resaltado
Usa tres \`\`\` comillas invertidas indicando el lenguaje al inicio para activar el coloreado de sintaxis:

```csharp
// Ejemplo de código C#
public class Usuario 
{
    public string Nombre { get; set; }
    
    public void Saludar() 
    {
        Console.WriteLine($"Hola, {Nombre}");
    }
}
```

```javascript
// Ejemplo de código JavaScript
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}
```

```bash
# Ejemplo de comandos en Terminal
git add .
git commit -m "Mensaje de commit"
git push origin main
```

---

## 5. Enlaces e Imágenes

* **Enlace web o interno:** `[Texto visible](URL_o_ruta)`
  * Ejemplo: `[Ir a GitHub](https://github.com)`
  * Ejemplo local: `[Ver herramientas](./m1_herramientas-microsoft-backend.md)`

* **Imagen:** `![Texto alternativo](Ruta_o_URL_de_la_imagen)`
  * Ejemplo: `![Diagrama de flujo](../assets/diagramas/login.png)`

---

## 6. Tablas

Utiliza barras verticales `|` para las columnas y guiones `-` para definir el encabezado.

| Módulo | Tema Principal | Lenguaje |
| :--- | :---: | ---: |
| Módulo 1 | Fundamentos | Markdown / Git |
| Módulo 2 | Lógica y Backend | C# / .NET |
| Módulo 3 | Base de Datos | SQL |

> **Nota de alineación:** 
> * `:---` Alineación a la izquierda (por defecto).
> * `:---:` Alineación al centro.
> * `---:` Alineación a la derecha.

---

## 7. Citas y Notas Destacadas

Usa el carácter `>` al inicio de la línea para resaltar notas, advertencias o definiciones:

> **Importante:** Recuerda nunca subir contraseñas o claves secretas a un repositorio público en GitHub.

---

## 8. Línea Separadora

Usa tres guiones `---` o tres asteriscos `***` en una línea aislada para crear una división visual entre secciones:

---

## 9. Diagramas con Mermaid (Opcional)

Puedes crear diagramas de flujo escribiendo `mermaid` en el bloque de código:

```mermaid
flowchart TD
    %% 1. Óvalo / Terminal: Inicio y Fin
    A([Inicio]) --> B[/numero_1, numero_2/]

    %% 2. Paralelogramo inclinado a la derecha: Entrada de Datos (Lectura)
    B --> C[suma = numero_1 + numero_2]

    %% 3. Rectángulo: Proceso / Asignación
    C --> D{suma > 100}

    %% 4. Rombo: Decisión / Condición lógica
    D -- Sí --> E[\"Suma alta"\]
    D -- No --> F[\"Suma normal"\]

    %% 5. Paralelogramo inclinado a la izquierda: Salida de Datos (Impresión)
    E --> G[(Base de Datos)]
    F --> G

    %% 6. Cilindro: Almacenamiento / Base de datos
    G --> H([Fin])
```
---

### Tabla de referencia para tus notas

| Elemento / Concepto | Figura Geométrica | Sintaxis en Mermaid | Ejemplo de Uso |
| :--- | :--- | :--- | :--- |
| **Inicio / Fin** | Óvalo (Terminal) | `([Texto])` | `A([Inicio])` |
| **Entrada (Lectura)** | Paralelogramo der. | `[/Texto/]` | `B[/usuario, clave/]` |
| **Salida (Impresión)** | Paralelogramo izq. | `[\"Texto"\]` | `E[\"Acceso concedido"\]` |
| **Proceso / Cálculo** | Rectángulo | `[Texto]` | `C[total = a + b]` |
| **Decisión** | Rombo | `{Texto}` | `D{edad >= 18}` |
| **Persistencia / BD** | Cilindro | `[(Texto)]` | `G[(SQL Server)]` |

---

### Ejemplo avanzado: Maquetación en paralelo con Pseudocódigo

Si quieres guardar esta referencia en tus notas usando el diseño responsivo de dos columnas (`flex`):

<div class="comparativa-codigo">

```mermaid
flowchart TD
    A([Inicio]) --> B[/numero_1, numero_2/]
    B --> C[suma = numero_1 + numero_2]
    C --> D{suma > 100}
    
    D -- Sí --> E[\"Suma alta"\]
    D -- No --> F[\"Suma normal"\]
    
    E --> G[(BD_Logs)]
    F --> G --> H([Fin])
```

```pseudocode
    Inicio Referencia_Sintaxis

    // Declaración
    Entero: numero_1, numero_2, suma

    // Entrada
    Leer(numero_1, numero_2)

    // Proceso
    suma <- numero_1 + numero_2

    // Decisión
    Si suma > 100 Entonces
        Escribir("Suma alta")
    Sino
        Escribir("Suma normal")
    FinSi

    // Guardado
    GuardarEnBD(suma)

    Fin Referencia_Sintaxis
```
</div>