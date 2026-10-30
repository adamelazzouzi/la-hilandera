// ============================================
// DATOS DEL NEGOCIO
// La Hilandera · Librería-cafetería
// ============================================

export const negocio = {
    negocio: {
        nombre: "La Hilandera",
        tipo: "Librería-cafetería con rincón de lectura y taller de encuadernación",
        eslogan: "Hilos de papel, café y buenas historias",
        descripcionCorta: "Una librería de pueblo con cafetería y talleres de encuadernación artesanal donde cada libro encuentra su lector.",
        descripcionLarga: "La Hilandera nació en 2016 en el antiguo taller de costura de la abuela Marisa, en el corazón de Villanueva del Río. Conservamos las estanterías de madera, el suelo de baldosa hidráulica y el aroma a café recién hecho. Somos librería de fondo cuidado, cafetería de proximidad y taller de encuadernación artesanal. Organizamos clubes de lectura, presentaciones de autores locales y talleres para todas las edades. Un lugar para quedarse, hojear sin prisa y llevarse un libro cosido a mano.",
        añoFundacion: 2016,
        ciudad: "Villanueva del Río",
        provincia: "Zamora"
    },
    contacto: {
        direccion: "Calle Costanilla, 7, 49320 Villanueva del Río, Zamora",
        telefono: "+34 980 55 42 18",
        email: "hola@lahilandera.es",
        redesSociales: {
            instagram: "@lahilandera.villarrio",
            facebook: "La Hilandera Librería Café",
            tiktok: "@lahilanderalibros"
        },
        horario: {
            lunes: "Cerrado",
            martes: "10:00-14:00 y 17:00-20:30",
            miercoles: "10:00-14:00 y 17:00-20:30",
            jueves: "10:00-14:00 y 17:00-20:30",
            viernes: "10:00-14:00 y 17:00-21:00",
            sabado: "10:30-14:30 y 17:00-21:00",
            domingo: "11:00-14:00 (solo cafetería y prensa)"
        },
        googleMaps: {
            latitud: 41.5034,
            longitud: -5.7421,
            enlace: "https://maps.google.com/?q=Calle+Costanilla+7+Villanueva+del+Rio+Zamora"
        }
    },
    diseno: {
        colores: {
            primario: "#6B4F3A",
            secundario: "#C9A66B",
            fondo: "#F7F1E5",
            texto: "#2E2A26"
        },
        tipografia: {
            titulos: "Playfair Display",
            cuerpo: "Lora"
        },
        estiloVisual: "Artesanal y cálido, con texturas de papel y madera, líneas finas inspiradas en el hilo de coser, fotografías naturales con luz de ventana y composiciones limpias con mucho aire.",
        referencias: [
            "Librerías independientes con cafetería como La Central o Laie",
            "Estética editorial de revistas de oficios artesanos",
            "Webs de talleres de encuadernación como Bookbinding Studio",
            "Paletas cálidas de papelerías japonesas"
        ]
    },
    contenido: {
        hero: {
            titulo: "Libros que se cosen a mano y cafés que invitan a quedarse",
            subtitulo: "Librería, cafetería y taller de encuadernación en el centro de Villanueva del Río",
            textoBoton: "Reserva tu mesa de lectura",
            imagenDescripcion: "Interior luminoso de una librería-cafetería con estanterías de madera antigua, una mesa grande de mármol con tazas de café y libros abiertos, luz cálida de tarde entrando por un ventanal con cortinas de lino, plantas colgando y una persona hojeando un libro en un sillón de terciopelo verde."
        },
        sobreNosotros: {
            titulo: "Un taller de costura convertido en refugio de lectores",
            texto: "En 2016, Lucía y Mateo recuperaron el taller de costura de la abuela Marisa para abrir La Hilandera. Conservamos las estanterías originales, el suelo hidráulico y la máquina de coser que hoy preside la mesa de encuadernación. Somos librería de fondo seleccionado, cafetería de comercio justo y taller donde enseñamos a coser libros a mano. Creemos en los pueblos que leen, en el café sin prisa y en las historias que pasan de mano en mano.",
            imagenDescripcion: "Plano detalle de una mesa de trabajo de encuadernación artesanal con hilo de lino, agujas curvas, pliegos de papel, prensa de madera y una taza de café humeante, junto a una ventana con luz suave y estanterías desenfocadas al fondo."
        },
        productos: [
            {
                nombre: "Libro cosido a mano 'Cuaderno de campo'",
                descripcion: "Cuaderno artesanal con cubierta de tela y papel de algodón, cosido con hilo de lino. 120 páginas, formato A5.",
                precio: "18,50 €",
                imagenDescripcion: "Cuaderno artesanal de tapa dura forrada en tela color mostaza con hilo de lino visible en el lomo, sobre una mesa de madera con una pluma y un sobre de papel kraft."
            },
            {
                nombre: "Café de especialidad de Villanueva",
                descripcion: "Café de tueste medio de una tostadora de Zamora, con notas de cacao y avellana. Disponible en grano o molido, 250 g.",
                precio: "8,90 €",
                imagenDescripcion: "Bolsa de café kraft con etiqueta artesanal impresa en tinta marrón, granos de café dispersos sobre una superficie de mármol blanco y una cuchara de madera."
            },
            {
                nombre: "Set de encuadernación para principiantes",
                descripcion: "Kit con aguja curva, hilo de lino, punzón, papel de guardas y manual ilustrado para coser tu primer libro.",
                precio: "24,00 €",
                imagenDescripcion: "Kit de encuadernación desplegado sobre una mesa de madera clara: aguja curva, carrete de hilo de lino, punzón de madera, papeles decorados y un pequeño manual ilustrado."
            },
            {
                nombre: "Selección de lectura del mes",
                descripcion: "Tres libros elegidos por nuestro club de lectura, con marcapáginas cosido a mano y ficha de lectura.",
                precio: "32,00 €",
                imagenDescripcion: "Tres libros de diferentes colores apilados sobre una mesa de mármol, con un marcapáginas de hilo y una tarjeta escrita a mano con recomendaciones."
            }
        ],
        servicios: [
            {
                nombre: "Taller de encuadernación artesanal",
                descripcion: "Taller de dos horas para aprender la costura copta y llevarte tu propio cuaderno. Materiales incluidos. Grupos de 6 personas.",
                precio: "35,00 € por persona"
            },
            {
                nombre: "Club de lectura 'La Hilandera'",
                descripcion: "Encuentro mensual para comentar una lectura común, con café y pastas de la panadería del pueblo. Incluye el libro del mes.",
                precio: "22,00 € al mes"
            },
            {
                nombre: "Encuadernación de libros heredados",
                descripcion: "Restauración y encuadernación de libros antiguos o familiares con materiales de archivo. Presupuesto personalizado.",
                precio: "Desde 45,00 €"
            },
            {
                nombre: "Reserva de mesa de lectura",
                descripcion: "Reserva una mesa junto a la ventana durante dos horas con consumición mínima. Ideal para leer, escribir o trabajar tranquilo.",
                precio: "5,00 € (se descuentan de la consumición)"
            }
        ],
        galeria: [
            { descripcion: "Fachada de La Hilandera con toldo de rayas marrones, escaparate con libros y plantas, y una bicicleta antigua apoyada en la pared." },
            { descripcion: "Mesa de encuadernación con prensa de madera, pliegos de papel y hilos de colores colgando de un tablero de corcho." },
            { descripcion: "Rincón de lectura con sillón de terciopelo verde, lámpara de pie de latón y una pila de libros sobre una mesa auxiliar." },
            { descripcion: "Barra de cafetería con máquina de espresso, tazas de cerámica artesanal y un expositor de pastas caseras." },
            { descripcion: "Taller de encuadernación con seis personas alrededor de una mesa grande, cosiendo cuadernos con hilo de lino." },
            { descripcion: "Detalle de la máquina de coser antigua de la abuela Marisa, hoy usada como expositor de marcapáginas y libretas." }
        ],
        testimonios: [
            {
                nombre: "Carmen Villalba",
                texto: "Vengo desde Benavente solo por su café y sus recomendaciones. Lucía tiene un ojo increíble para los libros y el taller de encuadernación es una maravilla. Se ha convertido en mi plan de sábado.",
                valoracion: 5
            },
            {
                nombre: "Javier y Marta",
                texto: "Hicimos el taller de encuadernación para celebrar nuestro aniversario y nos llevamos dos cuadernos cosidos por nosotros. Nos trataron como en casa. Repetiremos con el club de lectura.",
                valoracion: 5
            },
            {
                nombre: "Rosa Medina",
                texto: "Restauraron el libro de recetas de mi madre, que estaba descosido y con las hojas sueltas. Lo dejaron precioso y respetando cada anotación. Un trabajo hecho con muchísimo cariño.",
                valoracion: 5
            },
            {
                nombre: "Álvaro Nieto",
                texto: "Un sitio perfecto para leer tranquilo por la tarde. La mesa junto a la ventana y el café de especialidad son mi combinación favorita. Ojalá hubiera más sitios así en los pueblos.",
                valoracion: 4
            }
        ],
        preguntasFrecuentes: [
            {
                pregunta: "¿Hace falta apuntarse antes al taller de encuadernación?",
                respuesta: "Sí, los grupos son de seis personas y se llenan rápido. Puedes reservar por teléfono, email o en la propia librería. Abrimos nuevas fechas cada mes."
            },
            {
                pregunta: "¿Se puede trabajar o estudiar en la cafetería?",
                respuesta: "Por supuesto. Tenemos mesas grandes, wifi gratuito y enchufes. Solo pedimos que si vas a pasar muchas horas hagas alguna consumición y respetes el silencio del rincón de lectura."
            },
            {
                pregunta: "¿Encuadernáis libros que no habéis vendido vosotros?",
                respuesta: "Sí, trabajamos con libros de cualquier procedencia. Tráenoslo y te damos un presupuesto sin compromiso. Para libros antiguos o muy deteriorados pedimos cita previa para valorarlo con calma."
            },
            {
                pregunta: "¿Tenéis opciones sin gluten o veganas en la cafetería?",
                respuesta: "Sí. Trabajamos con una panadería del pueblo que nos trae bizcochos sin gluten y opciones veganas cada mañana. También tenemos bebidas vegetales sin coste adicional."
            },
            {
                pregunta: "¿Se pueden comprar los libros de la selección del mes por separado?",
                respuesta: "Claro. La selección del mes tiene un precio especial, pero puedes llevarte cualquiera de los tres libros por separado al precio de librería. Te contamos por qué los hemos elegido."
            },
            {
                pregunta: "¿Organizáis presentaciones de libros para autores locales?",
                respuesta: "Sí, nos encanta. Si eres autor o autora de la zona y quieres presentar tu libro, escríbenos a hola@lahilandera.es y buscamos fecha. Cedemos el espacio y preparamos café para los asistentes."
            }
        ]
    },
    equipo: [
        {
            nombre: "Lucía Ferrero",
            rol: "Librera y cofundadora",
            descripcion: "Licenciada en Filología Hispánica y encuadernadora autodidacta. Selecciona el fondo de la librería y dirige el club de lectura. Cree que cada persona tiene un libro esperándola.",
            imagenDescripcion: "Retrato de una mujer de unos 40 años con gafas redondas, pelo castaño recogido en un moño, delantal de lino marrón y un libro en las manos, sonriendo en la librería con estanterías al fondo."
        },
        {
            nombre: "Mateo Sanabria",
            rol: "Barista y cofundador",
            descripcion: "Ex cocinero reconvertido en barista. Se encarga del café de especialidad, de las pastas del pueblo y de que nadie se vaya sin probar el bizcocho de limón.",
            imagenDescripcion: "Retrato de un hombre de unos 45 años con barba corta, camisa de cuadros y delantal de cuero, preparando café en la barra de la cafetería con una sonrisa tranquila."
        },
        {
            nombre: "Inés Barrio",
            rol: "Tallerista de encuadernación",
            descripcion: "Encuadernadora artesanal con veinte años de oficio. Imparte los talleres y se encarga de las restauraciones de libros antiguos. Le gusta enseñar sin prisa y con las manos manchadas de cola.",
            imagenDescripcion: "Retrato de una mujer de unos 55 años con pelo canoso corto, gafas de cerca y delantal de trabajo, cosiendo un libro en la mesa de encuadernación con hilo de lino."
        }
    ],
    legal: {
        avisoLegal: "Titular: La Hilandera Librería Café S.L. (en constitución). Domicilio social: Calle Costanilla, 7, 49320 Villanueva del Río, Zamora. CIF: B-00000000. Correo electrónico de contacto: hola@lahilandera.es. La Hilandera no se hace responsable del contenido de los enlaces externos ni de las opiniones vertidas por los usuarios en los espacios habilitados para ello. El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones.",
        politicaPrivacidad: "Los datos personales facilitados a través de los formularios de este sitio web serán tratados por La Hilandera Librería Café S.L. con la finalidad de gestionar reservas, inscripciones a talleres, suscripciones al boletín y consultas. Base jurídica: consentimiento del interesado y ejecución de la relación contractual. Los datos no se cederán a terceros salvo obligación legal. Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a hola@lahilandera.es o en la dirección postal indicada. Conservamos los datos durante el tiempo necesario para la finalidad para la que fueron recogidos y, posteriormente, durante los plazos legales aplicables.",
        politicaCookies: "Este sitio web utiliza cookies técnicas necesarias para el funcionamiento de la página y cookies analíticas de terceros (Google Analytics) para medir el tráfico de forma anónima. Puedes aceptar, rechazar o configurar las cookies en el banner que aparece al acceder por primera vez. También puedes eliminar o bloquear las cookies desde la configuración de tu navegador. Si rechazas las cookies analíticas, la navegación por el sitio seguirá funcionando con normalidad. Para cualquier duda, escríbenos a hola@lahilandera.es."
    },
    extras: {
        logoDescripcion: "Logotipo tipográfico con la palabra 'La Hilandera' en Playfair Display, con una aguja e hilo de lino dibujados a mano que atraviesan la letra H, en color marrón sobre fondo crema. Versión circular para sellos y bolsas de papel.",
        faviconDescripcion: "Cuadrado de 32x32 px con fondo crema y una aguja de coser con hilo marrón formando una espiral sencilla, legible a tamaño pequeño.",
        imagenesNecesarias: [
            "Fotografía de fachada de la librería en un pueblo castellano con toldo de rayas y escaparate cuidado",
            "Fotografía interior del rincón de lectura con sillón de terciopelo y luz de ventana",
            "Fotografía de la mesa de encuadernación con materiales y manos trabajando",
            "Fotografía de la barra de cafetería con máquina de espresso y tazas artesanales",
            "Fotografía de grupo de personas en un taller de encuadernación alrededor de una mesa grande",
            "Retrato de Lucía Ferrero en la librería",
            "Retrato de Mateo Sanabria en la barra",
            "Retrato de Inés Barrio en la mesa de encuadernación",
            "Fotografía de detalle de un cuaderno cosido a mano con hilo de lino",
            "Fotografía de la máquina de coser antigua como expositor de marcapáginas"
        ]
    }
};