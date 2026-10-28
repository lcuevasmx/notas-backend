// Ejemplo sencillo de fetch para cargar una nota
async function cargarNota(nombreArchivo) {
    const respuesta = await fetch(`./contenido/${nombreArchivo}.md`);
    const textoMarkdown = await respuesta.text();
    
    // Convertir Markdown a HTML usando 'marked'
    document.getElementById('content').innerHTML = marked.parse(textoMarkdown);
}

// Cargar nota inicial
cargarNota('pseudocodigo');