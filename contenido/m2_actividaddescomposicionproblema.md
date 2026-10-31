# Problema 1: Aplicación de seguimiento del estado físico

Descomponer el desarrollo de una aplicación de seguimiento de la forma física que pueda realizar un seguimiento de los entrenamientos de los usuarios, controlar su dieta y proporcionar información sobre la salud.

1. Defina el objetivo principal de la aplicación.
- Crear una aplicación de seguimiento físico para registrar los entrenamientos, controlar la dieta y proporcionar información sobre la salud del usuario.

2. Utilice el enfoque descendente para descomponer la aplicación en sus principales características.
- Gestión de usuarios y perfil de salud.
- Gestión de entrenamientos.
- Gestión de dieta y alimentación.
- Generación de reportes e información de salud.

3. Descomponer cada característica en tareas más pequeñas y manejables.
- Gestión de usuarios y perfil de salud:
  * Registrar usuario y datos base (edad, género, peso, estatura).
  * Consultar y editar perfil de salud.
- Gestión de entrenamientos:
  * Registrar nuevo entrenamiento.
  * Consultar historial de entrenamientos.
  * Editar o eliminar entrenamiento registrado.
- Gestión de dieta y alimentación:
  * Registrar consumo de alimentos/comida.
  * Consultar historial de comidas.
  * Editar o eliminar registro de comida.
- Reportes e información de salud:
  * Calcular métricas de salud (ej. IMC, requerimiento calórico).
  * Generar resumen de progreso (peso vs. tiempo, calorías quemadas vs. consumidas).
- Gestión de Actividad y Timeline:
  * Consultar historial cronológico combinado (comidas + entrenamientos).
  * Filtrar registros por rango de fechas (día, semana, mes).

4. Identificar oportunidades de modularización.
- Módulo de Usuarios (User Management): Maneja la autenticación y los datos personales/antropométricos.
- Módulo de Entrenamientos (Workout Module): Administra las rutinas, ejercicios y el historial de actividad física.
- Módulo de Nutrición (Nutrition Module): Controla el registro de comidas y el seguimiento calórico.
- Módulo de Analítica y Reportes (Analytics Module): Procesa los datos de entrenamiento y dieta para generar métricas de salud.
- Módulo de Timeline / Feed: Se encarga de consultar los eventos de entrenamiento 
  y nutrición ordenados por fecha para ofrecer la vista cronológica principal.


***

# Problema 2: Plataforma de aprendizaje en línea

Descomponer la creación de una plataforma de aprendizaje en línea que soporte la creación de cursos, la inscripción de usuarios, la entrega de contenidos y el seguimiento del progreso.

1. Defina el objetivo principal de la plataforma.
- Crear una plataforma de aprendizaje en línea que permita el registro e inscripción de usuarios, la creación y entrega de contenido educativo, y el seguimiento del progreso académico de los estudiantes.

2. Utilice el enfoque descendente para descomponer la plataforma en sus características principales.
- Gestión de usuarios y roles (estudiante y instructor/maestro).
- Gestión y entrega de cursos y contenidos.
- Gestión de inscripciones y matrículas.
- Gestión y seguimiento del progreso académico.

3. Descomponer cada característica en tareas más pequeñas y manejables.
- Gestión de usuarios y roles:
  * Registrar usuario (nombre, correo electrónico, contraseña, fecha de nacimiento).
  * Asignar y gestionar roles (estudiante / maestro).
  * Consultar y editar perfil de usuario.
- Gestión y entrega de cursos y contenidos:
  * Crear, editar o eliminar cursos (exclusivo para maestros).
  * Crear y estructurar módulos/lecciones dentro de un curso (videos, lecturas, archivos).
  * Consultar catálogo de cursos disponibles.
- Gestión de inscripciones y matrículas:
  * Inscribir estudiante a un curso.
  * Cancelar inscripción o consultar cursos inscritos por el estudiante.
- Gestión y seguimiento del progreso:
  * Marcar lecciones como completadas (estudiante).
  * Consultar porcentaje de avance general en un curso (estudiante).
  * Visualizar estadísticas de progreso de los alumnos inscritos (maestro).

4. Identificar oportunidades de modularización.
- Módulo de Usuarios y Autenticación (User & Auth Module): Controla registros, inicio de sesión, perfiles y permisos por rol (estudiante/maestro).
- Módulo de Cursos y Contenidos (Course & Content Module): Administra la estructura de los cursos, sus lecciones y el material educativo.
- Módulo de Inscripciones (Enrollment Module): Maneja la relación entre estudiantes y cursos (quién está inscrito en qué).
- Módulo de Progreso y Analítica (Progress Module): Registra las lecciones completadas y calcula porcentajes o reportes de avance.

***

> **Nota de gemini:** En el desarrollo backend es más práctico modularizar por Dominio o Entidad de Negocio (por el tipo de datos que manejas).