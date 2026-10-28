async function cargarSidebar() {
    try {
        const respuesta = await fetch('./_sidebar.md');
        if (!respuesta.ok) throw new Error('No se encontró el archivo _sidebar.md');

        const markdown = await respuesta.text();
        const sidebarElement = document.getElementById('sidebar');

        // Convertir Markdown a HTML usando 'marked'
        sidebarElement.innerHTML = marked.parse(markdown);
        escucharEnlaces();
    } catch (error) {
        console.error('Error al cargar el sidebar:', error);
        document.getElementById('sidebar').innerHTML = '<p>Error al cargar el menú.</p>';
    }
}   

function escucharEnlaces() {
    const enlaces = document.querySelectorAll('#sidebar a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', async (event) => {
            event.preventDefault();
            const rutaArchivo = enlace.getAttribute('href').replace('#', '');
            await cargarNota(rutaArchivo);
        });
    });
}

async function cargarNota(rutaArchivo) {
    try {
        const respuesta = await fetch(`${rutaArchivo}`);
        if (!respuesta.ok) throw new Error('No se encontró el archivo');

        const markdown = await respuesta.text();
        document.getElementById('contenido').innerHTML = marked.parse(markdown);
    } catch (error) {
        console.error(error);
        document.getElementById('contenido').innerHTML = '<p>Error al cargar la nota.</p>';
    }
}

// Cargar el sidebar al iniciar la página
document.addEventListener('DOMContentLoaded', cargarSidebar);
document.addEventListener('DOMContentLoaded', () => {
    // Cargar la primera nota por defecto
    cargarNota('./contenido/introduccion.md');
});