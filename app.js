async function cargarSidebar() {
    try {
        const res = await fetch('sidebar.md');
        if (!res.ok) throw new Error('No se pudo encontrar sidebar.md');
        
        const markdown = await res.text();
        const sidebarEl = document.getElementById('sidebar');
        sidebarEl.innerHTML = marked.parse(markdown);

        // Escuchar los clics del menú
        escucharEnlaces();

        // COMPROBAR SI VIENE DE UN REFRESH (F5) O LINK DIRECTO
        comprobarHashURL();
    } catch (error) {
        console.error(error);
        document.getElementById('sidebar').innerHTML = '<p>Error al cargar el menú.</p>';
    }
}

// Interceptar los clics del menú
function escucharEnlaces() {
    const enlaces = document.querySelectorAll('#sidebar a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const rutaNota = enlace.getAttribute('href');
            
            // Guardar en la URL para que persista al dar F5
            // Extrae solo el nombre del archivo sin extensión
            const nombreNota = rutaNota.split('/').pop().replace('.md', '');
            window.location.hash = nombreNota;

            // Cargar la nota en pantalla
            cargarNota(rutaNota);
            const contenidoEl = document.getElementById('contenido');
            if(contenidoEl) {
                contenidoEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Leer la URL al dar F5 o entrar mediante un enlace compartido
function comprobarHashURL() {
    const hash = window.location.hash.replace('#', '');
    
    if (hash) {
        // Busca el enlace en el menú que coincida con el hash de la URL
        const enlaceCoincidente = Array.from(document.querySelectorAll('#sidebar a'))
            .find(a => a.getAttribute('href').includes(hash));

        if (enlaceCoincidente) {
            const ruta = enlaceCoincidente.getAttribute('href');
            cargarNota(ruta);
            return;
        } else {
            cargarNota('./contenido/home.md');
        }
    }
}

async function cargarNota(ruta) {
    try {
        const res = await fetch(ruta);
        if (!res.ok) throw new Error('No se pudo cargar la nota');
        
        const markdown = await res.text();
        
        // 1. Inyectar el HTML
        document.getElementById('contenido').innerHTML = marked.parse(markdown);
        
        // 2. Renderizar los diagramas de Mermaid
        if (window.mermaid) {
            mermaid.run({
                querySelector: '.language-mermaid'
            });
        }
    } catch (error) {
        console.error(error);
        document.getElementById('contenido').innerHTML = '<p>Error al cargar la nota.</p>';
    }
}

const btnSubir = document.getElementById('btn-subir');

btnSubir.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Escuchar si el usuario presiona los botones Atrás/Adelante del navegador
window.addEventListener('hashchange', comprobarHashURL); 

// Iniciar al cargar la página
document.addEventListener('DOMContentLoaded', cargarSidebar);
document.addEventListener('DOMContentLoaded', () => {
    // Cargar la nota por defecto al iniciar
    cargarNota('./contenido/home.md');
});