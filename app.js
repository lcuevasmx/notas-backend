// Variable global para evitar recargar la misma nota
let notaActualRuta = '';

// 1. Renderer personalizado de marked para asegurar que TODOS los h1..h6 tengan id="slug"
const renderer = new marked.Renderer();

renderer.heading = function (text, level) {
    const textoLimpio = typeof text === 'object' ? text.text : text;
    
    // Genera un slug idéntico al estándar de GitHub (ej. "Resumen del Video" -> "resumen-del-video")
    const id = textoLimpio
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

    return `<h${level} id="${id}">${textoLimpio}</h${level}>`;
};

marked.use({ renderer });

// 2. Cargar el menú lateral
async function cargarSidebar() {
    try {
        const res = await fetch('sidebar.md');
        if (!res.ok) throw new Error('No se pudo encontrar sidebar.md');

        const markdown = await res.text();
        const sidebarEl = document.getElementById('sidebar');
        if (sidebarEl) sidebarEl.innerHTML = marked.parse(markdown);

        // Procesar la URL limpia al entrar o dar F5
        await comprobarEstadoURL();
    } catch (err) {
        console.error(err);
        const sidebarEl = document.getElementById('sidebar');
        if (sidebarEl) sidebarEl.innerHTML = '<p>Error al cargar el menú.</p>';
    }
}

// 3. Captura global de clics (Menu + Contenido)
document.addEventListener('click', async (e) => {
    const enlace = e.target.closest('a');
    if (!enlace) return;

    const href = enlace.getAttribute('href');
    if (!href || href.startsWith('http')) return; // Dejar pasar enlaces web

    e.preventDefault();

    // CASO A: Es un ancla interna a una sección (#lectura, #resumen)
    if (href.startsWith('#')) {
        const idTarget = href.replace('#', '');
        
        // Mantiene la nota en la URL y solo actualiza el #hash al final
        window.location.hash = idTarget;
        hacerScrollA(idTarget);
        return;
    }

    // CASO B: Es un enlace principal a un archivo .md sin # (ej: ./contenido/m1.md)
    if (href.includes('.md')) {
        const nombreNota = href.split('/').pop().replace('.md', '');

        // Actualiza la URL limpia con ?nota=nombreNota (SIN #)
        const nuevaURL = `?nota=${nombreNota}`;
        history.pushState({ ruta: href }, '', nuevaURL);

        // Carga la nota en #contenido
        await cargarNota(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// 4. Inyectar el HTML traducido en el contenedor #contenido
async function cargarNota(ruta) {
    const contenidoEl = document.getElementById('contenido');
    if (!contenidoEl) return;

    if (ruta === notaActualRuta) return;

    try {
        const res = await fetch(ruta);
        if (!res.ok) throw new Error(`No se pudo cargar: ${ruta}`);

        const markdown = await res.text();
        notaActualRuta = ruta;

        // Renderiza el HTML con los <h1..h6 id="...">
        contenidoEl.innerHTML = marked.parse(markdown);

        if (window.mermaid) {
            mermaid.run({ querySelector: '.language-mermaid' });
        }
    } catch (err) {
        console.error(err);
        contenidoEl.innerHTML = `<p>Error al cargar la nota (${ruta}).</p>`;
    }
}

// 5. Scroll preciso hacia el id
function hacerScrollA(id) {
    const idLimpio = id.replace('#', '');
    const elemento = document.getElementById(idLimpio);

    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 6. Leer la URL al dar F5 o navegar con el historial (Atrás/Adelante)
async function comprobarEstadoURL() {
    const params = new URLSearchParams(window.location.search);
    const notaParam = params.get('nota');
    const hashID = window.location.hash.replace('#', '');

    if (notaParam) {
        // Buscar el enlace en el sidebar que coincida con ?nota=
        const enlaceCoincidente = Array.from(document.querySelectorAll('#sidebar a'))
            .find(a => a.getAttribute('href')?.includes(notaParam));

        if (enlaceCoincidente) {
            const ruta = enlaceCoincidente.getAttribute('href');
            await cargarNota(ruta);

            // Si además venía con un #id al final, hace scroll hacia él
            if (hashID) {
                hacerScrollA(hashID);
            }
            return;
        }
    }

    // Si no hay parámetro de nota pero hay un hash, intenta scroll en la nota actual
    if (hashID && notaActualRuta) {
        hacerScrollA(hashID);
        return;
    }

    // Portada por defecto
    await cargarNota('./contenido/home.md');
}

// Botón subir
const btnSubir = document.getElementById('btn-subir');
if (btnSubir) {
    btnSubir.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Eventos de historial
window.addEventListener('popstate', comprobarEstadoURL);
document.addEventListener('DOMContentLoaded', cargarSidebar);