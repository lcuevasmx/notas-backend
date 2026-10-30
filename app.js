// 1. Renderer personalizado universal para marked (compatible con v4 hasta v13+)
const renderer = new marked.Renderer();

renderer.heading = function (arg1, arg2) {
    let text = '';
    let level = 2;

    // Manejar compatibilidad entre versiones de marked:
    if (typeof arg1 === 'object' && arg1 !== null) {
        // Versiones modernas (v12+): arg1 es un token { text: '...', depth: 2, ... }
        text = arg1.text || '';
        level = arg1.depth || 2;
    } else {
        // Versiones antiguas: arg1 es texto, arg2 es el nivel (1-6)
        text = arg1 || '';
        level = arg2 || 2;
    }

    // Normalizar espacios a guiones y aplicar codificación de URL a los caracteres especiales
    const textoLimpio = text.trim().toLowerCase().replace(/\s+/g, '-');
    
    // encodeURIComponent convierte acentos y caracteres especiales a %XX
    const id = encodeURIComponent(textoLimpio);

    return `<h${level} id="${id}">${text}</h${level}>`;
};

// Aplicar el renderer a marked
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

        // Actualiza la URL limpia con ?n=nombreNota (SIN #)
        const nuevaURL = `?n=${nombreNota}`;
        history.pushState({ ruta: href }, '', nuevaURL);

        // Carga la nota en #contenido
        await cargarNota(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

async function cargarNota(ruta) {
    const contenidoEl = document.getElementById('contenido');
    if (!contenidoEl) return;

    try {
        const res = await fetch(ruta);
        if (!res.ok) throw new Error(`No se pudo cargar: ${ruta}`);

        const markdown = await res.text();
        notaActualRuta = ruta;

        // Inyección: Aquí marked ejecutará el renderer.heading corregido
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
    const notaParam = params.get('n');
    const hashID = window.location.hash.replace('#', '');

    if (notaParam) {
        // Buscar el enlace en el sidebar que coincida con ?n=
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

// Interceptar clics globales (Sidebar + Anclas internas)
document.addEventListener('click', async (e) => {
    const enlace = e.target.closest('a');
    if (!enlace) return;

    const href = enlace.getAttribute('href');
    if (!href || href.startsWith('http')) return; // Enlaces externos web

    e.preventDefault();

    // CASO A: Ancla interna dentro de la misma nota (#lectura, #resumen)
    if (href.startsWith('#')) {
        const idTarget = href.replace('#', '');
        window.location.hash = idTarget;
        hacerScrollA(idTarget);
        return;
    }

    // CASO B: Clic en nota del Sidebar (?nota=nombreNota)
    if (href.includes('.md')) {
        const nombreNota = href.split('/').pop().replace('.md', '');
        const nuevaURL = `?n=${nombreNota}`;

        history.pushState({ ruta: href }, '', nuevaURL);

        // 1. Cargar el HTML de la nota
        await cargarNota(href);

        // 2. Hacer scroll suave directamente al inicio del área de contenido
        const contenidoEl = document.getElementById('contenido');
        if (contenidoEl) {
            contenidoEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});