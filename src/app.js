// ============================================
// APP - Punto de entrada
// ============================================

import { negocio } from './data/negocio.js';
import { montarInicio } from './ui/inicio.js';
import { montarLegal } from './ui/legal.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const path = window.location.pathname;
    const archivo = path.substring(path.lastIndexOf('/') + 1);

    if (archivo === 'aviso-legal.html') {
        montarLegal(app, negocio, 'aviso-legal');
    } else if (archivo === 'privacidad.html') {
        montarLegal(app, negocio, 'privacidad');
    } else if (archivo === 'cookies.html') {
        montarLegal(app, negocio, 'cookies');
    } else {
        montarInicio(app, negocio);
    }
});