// ============================================
// APP - Punto de entrada
// ============================================

import { negocio } from './data/negocio.js';
import { montarInicio } from './ui/inicio.js';
import { montarLegal } from './ui/legal.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Detectar la página por la URL, limpiando barras y extensión
    let ruta = window.location.pathname
        .replace(/^\/+|\/+$/g, '')   // quitar barras al inicio y final
        .replace(/\.html$/, '');      // quitar extensión .html

    // Si la ruta está vacía (raíz), es el inicio
    if (ruta === 'aviso-legal') {
        montarLegal(app, negocio, 'aviso-legal');
    } else if (ruta === 'privacidad') {
        montarLegal(app, negocio, 'privacidad');
    } else if (ruta === 'cookies') {
        montarLegal(app, negocio, 'cookies');
    } else {
        montarInicio(app, negocio);
    }
});