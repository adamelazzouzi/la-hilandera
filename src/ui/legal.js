// ============================================
// UI - PÁGINAS LEGALES
// Aviso legal, privacidad, cookies
// ============================================

export function montarLegal(contenedor, negocio, tipo) {
    const n = negocio.negocio;
    const legal = negocio.legal;

    let titulo, contenido;

    if (tipo === 'aviso-legal') {
        titulo = 'Aviso legal';
        contenido = legal.avisoLegal;
    } else if (tipo === 'privacidad') {
        titulo = 'Política de privacidad';
        contenido = legal.politicaPrivacidad;
    } else if (tipo === 'cookies') {
        titulo = 'Política de cookies';
        contenido = legal.politicaCookies;
    } else {
        titulo = 'Página legal';
        contenido = 'Contenido no disponible.';
    }

    contenedor.innerHTML = `
        <header class="header">
            <div class="contenedor header-contenido">
                <a href="index.html" class="header-logo">
                    <span class="header-logo-icono">📚</span>
                    <span class="header-logo-texto">${n.nombre}</span>
                </a>
                <a href="index.html" class="header-cta">← Volver</a>
            </div>
        </header>

        <main class="legal">
            <div class="contenedor legal-contenido">
                <p class="seccion-eyebrow">Legal</p>
                <h1 class="legal-titulo">${titulo}</h1>
                <p class="legal-texto">${contenido}</p>
                <a href="index.html" class="btn btn-secundario legal-volver">← Volver al inicio</a>
            </div>
        </main>

        <footer class="footer">
            <div class="contenedor footer-contenido">
                <div class="footer-col">
                    <p class="footer-logo">${n.nombre}</p>
                    <p class="footer-eslogan">${n.eslogan}</p>
                </div>
                <div class="footer-col">
                    <p class="footer-titulo">Contacto</p>
                    <p class="footer-texto">${negocio.contacto.direccion}</p>
                    <p class="footer-texto">${negocio.contacto.telefono}</p>
                    <p class="footer-texto">${negocio.contacto.email}</p>
                </div>
                <div class="footer-col">
                    <p class="footer-titulo">Legal</p>
                    <a href="aviso-legal.html" class="footer-link">Aviso legal</a>
                    <a href="privacidad.html" class="footer-link">Política de privacidad</a>
                    <a href="cookies.html" class="footer-link">Política de cookies</a>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="contenedor">
                    <p class="footer-copyright">© ${new Date().getFullYear()} ${n.nombre}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    `;
}