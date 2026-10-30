// ============================================
// UI - PANTALLA DE INICIO
// La Hilandera
// ============================================

export function montarInicio(contenedor, negocio) {
    const n = negocio.negocio;
    const c = negocio.contacto;
    const hero = negocio.contenido.hero;
    const sobre = negocio.contenido.sobreNosotros;
    const productos = negocio.contenido.productos;
    const servicios = negocio.contenido.servicios;
    const galeria = negocio.contenido.galeria;
    const testimonios = negocio.contenido.testimonios;
    const faq = negocio.contenido.preguntasFrecuentes;
    const equipo = negocio.equipo;

    contenedor.innerHTML = `
        <header class="header">
            <div class="contenedor header-contenido">
                <a href="#" class="header-logo">
                    <span class="header-logo-icono">📚</span>
                    <span class="header-logo-texto">${n.nombre}</span>
                </a>
                <nav class="header-nav">
                    <a href="#sobre-nosotros" class="header-nav-link">Sobre nosotros</a>
                    <a href="#productos" class="header-nav-link">Productos</a>
                    <a href="#servicios" class="header-nav-link">Servicios</a>
                    <a href="#galeria" class="header-nav-link">Galería</a>
                    <a href="#contacto" class="header-nav-link">Contacto</a>
                </nav>
                <a href="#contacto" class="header-cta">Visítanos</a>
                <button class="header-menu-btn" id="menuBtn" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="header-menu-movil oculto" id="menuMovil">
                <a href="#sobre-nosotros" class="header-menu-movil-link">Sobre nosotros</a>
                <a href="#productos" class="header-menu-movil-link">Productos</a>
                <a href="#servicios" class="header-menu-movil-link">Servicios</a>
                <a href="#galeria" class="header-menu-movil-link">Galería</a>
                <a href="#contacto" class="header-menu-movil-link">Contacto</a>
                <a href="#contacto" class="header-menu-movil-cta">Visítanos</a>
            </div>
        </header>

        <section class="hero">
            <div class="contenedor hero-contenido">
                <div class="hero-texto">
                    <p class="hero-eyebrow">${n.ciudad} · ${n.provincia}</p>
                    <h1 class="hero-titulo">${hero.titulo}</h1>
                    <p class="hero-subtitulo">${hero.subtitulo}</p>
                    <div class="hero-acciones">
                        <a href="#contacto" class="btn btn-primario">${hero.textoBoton}</a>
                        <a href="#sobre-nosotros" class="btn btn-secundario">Conócenos</a>
                    </div>
                </div>
                <div class="hero-visual">
                    <img src="assets/imagenes/hero.jpg" alt="Interior de La Hilandera" class="hero-imagen">
                </div>
            </div>
        </section>

        <section class="sobre-nosotros animar" id="sobre-nosotros">
            <div class="contenedor sobre-contenido">
                <div class="sobre-visual">
                    <img src="assets/imagenes/sobre-nosotros.jpg" alt="Mesa de encuadernación de La Hilandera" class="sobre-imagen">
                </div>
                <div class="sobre-texto">
                    <p class="seccion-eyebrow">Sobre nosotros</p>
                    <h2 class="seccion-titulo">${sobre.titulo}</h2>
                    <p class="sobre-descripcion">${sobre.texto}</p>
                </div>
            </div>
        </section>

        <section class="productos animar" id="productos">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Productos</p>
                    <h2 class="seccion-titulo">Lo que puedes llevarte a casa</h2>
                </div>
                <div class="productos-grid">
                    ${productos.map((producto, i) => {
                        const imagenes = [
                            'assets/imagenes/producto-cuaderno.jpg',
                            'assets/imagenes/producto-cafe.jpg',
                            'assets/imagenes/producto-set-encuadernacion.jpg',
                            'assets/imagenes/producto-seleccion-lectura.jpg'
                        ];
                        return `
                        <article class="producto-card">
                            <div class="producto-imagen">
                                <img src="${imagenes[i]}" alt="${producto.nombre}" class="producto-imagen-img">
                            </div>
                            <div class="producto-info">
                                <h3 class="producto-nombre">${producto.nombre}</h3>
                                <p class="producto-descripcion">${producto.descripcion}</p>
                                <p class="producto-precio">${producto.precio}</p>
                            </div>
                        </article>
                    `}).join('')}
                </div>
            </div>
        </section>

        <section class="servicios animar" id="servicios">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Servicios</p>
                    <h2 class="seccion-titulo">Talleres y experiencias</h2>
                </div>
                <div class="servicios-grid">
                    ${servicios.map(servicio => `
                        <article class="servicio-card">
                            <div class="servicio-info">
                                <h3 class="servicio-nombre">${servicio.nombre}</h3>
                                <p class="servicio-descripcion">${servicio.descripcion}</p>
                                <p class="servicio-precio">${servicio.precio}</p>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="galeria animar" id="galeria">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Galería</p>
                    <h2 class="seccion-titulo">Un paseo por La Hilandera</h2>
                </div>
                <div class="galeria-grid">
                    ${galeria.map((imagen, i) => {
                        const imagenesGaleria = [
                            'assets/imagenes/galeria-fachada.jpg',
                            'assets/imagenes/galeria-mesa-encuadernacion.jpg',
                            'assets/imagenes/galeria-rincon-lectura.jpg',
                            'assets/imagenes/galeria-barra-cafeteria.jpg',
                            'assets/imagenes/galeria-taller-grupo.jpg',
                            'assets/imagenes/galeria-maquina-coser.jpg'
                        ];
                        return `
                        <div class="galeria-item">
                            <img src="${imagenesGaleria[i]}" alt="${imagen.descripcion}" class="galeria-imagen">
                        </div>
                    `}).join('')}
                </div>
            </div>
        </section>

        <section class="testimonios animar" id="testimonios">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Testimonios</p>
                    <h2 class="seccion-titulo">Lo que dicen nuestros lectores</h2>
                </div>
                <div class="testimonios-grid">
                    ${testimonios.map(testimonio => `
                        <article class="testimonio-card">
                            <div class="testimonio-estrellas">
                                ${'★'.repeat(testimonio.valoracion)}${'☆'.repeat(5 - testimonio.valoracion)}
                            </div>
                            <p class="testimonio-texto">"${testimonio.texto}"</p>
                            <p class="testimonio-nombre">— ${testimonio.nombre}</p>
                        </article>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="faq animar" id="faq">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Preguntas frecuentes</p>
                    <h2 class="seccion-titulo">Antes de venir</h2>
                </div>
                <div class="faq-lista">
                    ${faq.map((item, i) => `
                        <details class="faq-item" ${i === 0 ? 'open' : ''}>
                            <summary class="faq-pregunta">${item.pregunta}</summary>
                            <p class="faq-respuesta">${item.respuesta}</p>
                        </details>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="equipo animar" id="equipo">
            <div class="contenedor">
                <div class="seccion-header">
                    <p class="seccion-eyebrow">Equipo</p>
                    <h2 class="seccion-titulo">Quién te recibe</h2>
                </div>
                <div class="equipo-grid">
                    ${equipo.map((persona, i) => {
                        const imagenesEquipo = [
                            'assets/imagenes/equipo-lucia.jpg',
                            'assets/imagenes/equipo-mateo.jpg',
                            'assets/imagenes/equipo-ines.jpg'
                        ];
                        return `
                        <article class="equipo-card">
                            <div class="equipo-imagen">
                                <img src="${imagenesEquipo[i]}" alt="${persona.nombre}" class="equipo-imagen-img">
                            </div>
                            <div class="equipo-info">
                                <h3 class="equipo-nombre">${persona.nombre}</h3>
                                <p class="equipo-rol">${persona.rol}</p>
                                <p class="equipo-descripcion">${persona.descripcion}</p>
                            </div>
                        </article>
                    `}).join('')}
                </div>
            </div>
        </section>

        <section class="contacto animar" id="contacto">
            <div class="contenedor contacto-contenido">
                <div class="contacto-info">
                    <p class="seccion-eyebrow">Contacto</p>
                    <h2 class="seccion-titulo">Ven a visitarnos</h2>
                    <p class="contacto-intro">Estamos en el centro de ${n.ciudad}, en el antiguo taller de costura de la abuela Marisa. Pásate a leer, a tomar un café o a coser tu propio cuaderno.</p>
                    <ul class="contacto-lista">
                        <li class="contacto-item">
                            <span class="contacto-icono">📍</span>
                            <div>
                                <span class="contacto-label">Dirección</span>
                                <span class="contacto-valor">${c.direccion}</span>
                            </div>
                        </li>
                        <li class="contacto-item">
                            <span class="contacto-icono">📞</span>
                            <div>
                                <span class="contacto-label">Teléfono</span>
                                <a href="tel:${c.telefono.replace(/\s/g, '')}" class="contacto-valor">${c.telefono}</a>
                            </div>
                        </li>
                        <li class="contacto-item">
                            <span class="contacto-icono">✉️</span>
                            <div>
                                <span class="contacto-label">Email</span>
                                <a href="mailto:${c.email}" class="contacto-valor">${c.email}</a>
                            </div>
                        </li>
                    </ul>
                    <div class="contacto-redes">
                        ${c.redesSociales.instagram ? `<a href="https://instagram.com/${c.redesSociales.instagram.replace('@', '')}" target="_blank" rel="noopener" class="contacto-red">Instagram</a>` : ''}
                        ${c.redesSociales.facebook ? `<a href="https://facebook.com/${c.redesSociales.facebook}" target="_blank" rel="noopener" class="contacto-red">Facebook</a>` : ''}
                        ${c.redesSociales.tiktok ? `<a href="https://tiktok.com/${c.redesSociales.tiktok}" target="_blank" rel="noopener" class="contacto-red">TikTok</a>` : ''}
                    </div>
                </div>
                <div class="contacto-horario">
                    <h3 class="contacto-horario-titulo">Horario</h3>
                    <ul class="contacto-horario-lista">
                        <li class="contacto-horario-item"><span class="contacto-horario-dia">Lunes</span><span class="contacto-horario-hora">${c.horario.lunes}</span></li>
                        <li class="contacto-horario-item"><span class="contacto-horario-dia">Martes</span><span class="contacto-horario-hora">${c.horario.martes}</span></li>
                        <li class="contacto-horario-item"><span class="contacto-horario-dia">Miércoles</span><span class="contacto-horario-hora">${c.horario.miercoles}</span></li>
                        <li class="contacto-horario-item"><span class="contacto-horario-dia">Jueves</span><span class="contacto-horario-hora">${c.horario.jueves}</span></li>
                        <li class="contacto-horario-item"><span class="contacto-horario-dia">Viernes</span><span class="contacto-horario-hora">${c.horario.viernes}</span></li>
                        <li class="contacto-horario-item"><span class="contacto-horario-dia">Sábado</span><span class="contacto-horario-hora">${c.horario.sabado}</span></li>
                        <li class="contacto-horario-item"><span class="contacto-horario-dia">Domingo</span><span class="contacto-horario-hora">${c.horario.domingo}</span></li>
                    </ul>
                    <a href="${c.googleMaps.enlace}" target="_blank" rel="noopener" class="btn btn-primario contacto-mapa-btn">Ver en Google Maps</a>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="contenedor footer-contenido">
                <div class="footer-col">
                    <p class="footer-logo">${n.nombre}</p>
                    <p class="footer-eslogan">${n.eslogan}</p>
                </div>
                <div class="footer-col">
                    <p class="footer-titulo">Contacto</p>
                    <p class="footer-texto">${c.direccion}</p>
                    <p class="footer-texto">${c.telefono}</p>
                    <p class="footer-texto">${c.email}</p>
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

    // Menú móvil
    const menuBtn = document.getElementById('menuBtn');
    const menuMovil = document.getElementById('menuMovil');

    menuBtn.addEventListener('click', () => {
        menuMovil.classList.toggle('oculto');
        menuBtn.classList.toggle('activo');
    });

    menuMovil.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuMovil.classList.add('oculto');
            menuBtn.classList.remove('activo');
        });
    });

    // Animaciones al hacer scroll
    const elementosAnimar = contenedor.querySelectorAll('.animar');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elementosAnimar.forEach(el => observer.observe(el));
    } else {
        elementosAnimar.forEach(el => el.classList.add('visible'));
    }

    // Header con sombra al hacer scroll
    const header = contenedor.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }
}