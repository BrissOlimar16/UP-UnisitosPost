// script.js - Agregar al inicio del archivo

function loadComponents() {
    Promise.all([
        fetch('header.html').then(r => r.text()).catch(() => ""),
        fetch('footer.html').then(r => r.text()).catch(() => "")
    ]).then(([headerData, footerData]) => {
        const header = document.getElementById('header-placeholder');
        const footer = document.getElementById('footer-placeholder');

        if (header) header.innerHTML = headerData;
        if (footer) footer.innerHTML = footerData;

        if (document.querySelector('.menu-lateral')) setActiveLink();
        if (document.querySelector('.menu-lateral')) updateMenuForScreenSize();
    });
}


// Función para marcar el enlace activo
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.menu-lateral a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}



function updateMenuForScreenSize() {
    const menuLateral = document.querySelector('.menu-lateral');
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const mainContent = document.querySelector('.main-content');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    if (!menuLateral || !menuBtn || !menuOverlay || !mainContent || !header || !footer) return;

    const isLargeScreen = window.innerWidth >= 769;

    if (isLargeScreen) {
        menuLateral.classList.add('large');
        menuBtn.classList.add('large');
        menuOverlay.classList.add('large');
        mainContent.classList.add('large');
        header.classList.add('large');
        footer.classList.add('large');
    } else {
        menuLateral.classList.remove('large');
        menuBtn.classList.remove('large');
        menuOverlay.classList.remove('large');
        mainContent.classList.remove('large');
        header.classList.remove('large');
        footer.classList.remove('large');
    }
}


// Cargar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadComponents);

// Event listener para cambios de tamaño de pantalla
window.addEventListener('resize', updateMenuForScreenSize);


// Galeria de fotos para conferencias

//Conferencia 1
const fotos = [
    { img: "imagenes/fc1.jpg", texto: "Curso Sanamente Libremente" },
    { img: "imagenes/fc2.jpg", texto: "Curso Sanamente Libremente" },
    { img: "imagenes/fc3.jpg", texto: "Curso Sanamente Libremente" },
    { img: "imagenes/fc4.jpg", texto: "Curso Sanamente Libremente" }
];



let fotoActual = 0;

function cambiarFoto(direccion) {
    fotoActual += direccion;

    // Si pasa los límites
    if (fotoActual < 0) {
        fotoActual = fotos.length - 1;
    }
    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    // Actualizar
    document.getElementById("foto-actual").src = fotos[fotoActual].img;
    document.getElementById("numero").textContent = (fotoActual + 1) + " / " + fotos.length;
    document.getElementById("descripcion").textContent = fotos[fotoActual].texto;
}

//Conferencia 2
const fot = [
    { img: "imagenes/FB_1.jpg", texto: "Ponencias virtuales y presenciales" },
    { img: "imagenes/FB_2.jpg", texto: "Ponencias virtuales y presenciales" },
    { img: "imagenes/FB_3.jpg", texto: "Ponencias virtuales y presenciales" },
    { img: "imagenes/FB_4.jpg", texto: "Ponencias virtuales y presenciales" }
];
let fotActual = 0;

function cambiarF(direccion) {
    fotActual += direccion;

    // Si pasa los límites
    if (fotActual < 0) {
        fotActual = fot.length - 1;
    }
    if (fotActual >= fot.length) {
        fotActual = 0;
    }

    // Actualizar
    document.getElementById("foto-actual").src = fot[fotActual].img;
    document.getElementById("numero").textContent = (fotActual + 1) + " / " + fot.length;
    document.getElementById("descripcion").textContent = fot[fotActual].texto;
}

function initLikeEspeciales() {
  const heart = document.getElementById("like-heart");
  const countEl = document.getElementById("like-count");
  if (!heart || !countEl) return;

  let likes = parseInt(localStorage.getItem("especialesLikes")) || 0;

  countEl.textContent = likes;

  heart.addEventListener("click", () => {
    likes++;
    heart.classList.add("liked");
    countEl.textContent = likes;
    localStorage.setItem("especialesLikes", likes);
  });
}

document.addEventListener("DOMContentLoaded", initLikeEspeciales);



//Función para el login del administrador
const boton=document.getElementById("Ingresar");
if(boton){
    boton.addEventListener("click", function () {
        const usuario =document.getElementById("user").value;
        const contraseña = document.getElementById("password").value;

        if(usuario === "admin" && contraseña === "admin123") {
            localStorage.setItem("logeado", "true");
            window.location.href = "formulario.html";
            alert("¡Bienvenido, administrador!");
        }
        else{
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    });
}


// Funciones para el CMS
const DEFAULT_DATA = {
    secciones: {
        conferencias: [
        {
        titulo: "Conferencias UNSIS",
        descripcion: "Conferencia inaugural 2024",
        texto: "Del 09 de diciembre de 2025 y hasta el 14 de enero de 2026...",
        imagenes: [
            "imagenes/fc1.jpg",
            "imagenes/fc2.jpg",
            "imagenes/fc3.jpg",
            "imagenes/fc4.jpg"
        ]
        }
    ],
    jornadas: { titulo: "Jornadas", texto: "Contenido", imagen: "imagenes/jornadas.jpg" },
    cultura: { titulo: "Cultura", texto: "Contenido", imagen: "imagenes/cultura.jpg" },
    clubes: { titulo: "Clubes", texto: "Contenido", imagen: "imagenes/clubes.jpg" }
  },
  avisos: {
    deportes: { titulo: "Deportes", texto: "Contenido", imagen: "imagenes/basquet.jpg" },
    concursos: { titulo: "Concursos", texto: "Contenido", imagen: "imagenes/concursos.jpg" },
    cartelera: { titulo: "Cartelera", texto: "Contenido", imagen: "imagenes/cartelera.jpg" }
  },
  especiales: {
    carrusel: [
      "imagenes/imagen5 (5).jpg",
      "imagenes/imagen5 (1).jpg",
      "imagenes/imagen5 (2).jpg",
      "imagenes/imagen5 (3).jpg",
      "imagenes/imagen5 (4).jpg"
    ],
    subtitulo: "Inundación en la UNSIS",
    imagen: "imagenes/especiales.jpg",
    autor: "Redacción UNSIS",
    texto: "Descripción",
  }
};

// Funciones para manejar datos en localStorage
function getData() {
  return JSON.parse(localStorage.getItem("cmsData")) || DEFAULT_DATA;
}


function setData(data) {
  localStorage.setItem("cmsData", JSON.stringify(data));
}

// Función para mostrar el formulario según el módulo seleccionado
function onModuloChange() {
    const modulo = document.getElementById("modulo").value;
    const wrap = document.getElementById("subpagina-wrap");
    const subSelect = document.getElementById("subpagina");
    const form = document.getElementById("form-dinamico");
    form.style.display = "none";
    const formAgregar = document.getElementById("form-agregar-conferencia");
    if (formAgregar) formAgregar.style.display = "none";

    wrap.style.display = "none";
    subSelect.innerHTML = '<option value="">-- Selecciona --</option>';
    subSelect.value = "";
    form.innerHTML = "";

    if (modulo === "secciones") {
        wrap.style.display = "block";
        subSelect.innerHTML += `
        <option value="conferencias">Conferencias</option>
        <option value="jornadas">Jornadas</option>
        <option value="cultura">Cultura</option>
        <option value="clubes">Clubes</option>
        `;
    }

    if (modulo === "avisos") {
        wrap.style.display = "block";
        subSelect.innerHTML += `
        <option value="deportes">Deportes</option>
        <option value="concursos">Concursos</option>
        <option value="cartelera">Cartelera de la semana</option>
        `;
    }

    if (modulo === "especiales") {
        document.getElementById("form-dinamico").style.display = "block";
        mostrarEspecialesForm();
    }
}


function renderForm() {
    const sub = document.getElementById("subpagina").value;
    const form = document.getElementById("form-dinamico");
    const modulo = document.getElementById("modulo").value;
    const formAgregar = document.getElementById("form-agregar-conferencia");

    form.innerHTML = "";

    // Ocultar siempre el formulario de agregar
    if (formAgregar) formAgregar.style.display = "none";

    if (!sub) return;

    let data = {};
    
    if (modulo === "secciones") {
        data = getData().secciones[sub] || { titulo: "", texto: "", imagen: "" };
    } else if (modulo === "avisos") {
        data = getData().avisos[sub] || { titulo: "", texto: "", imagen: "" };
    }

    const saveFunction = modulo === "avisos" ? `saveAvisos('${sub}')` : `saveSeccion('${sub}')`;

    form.innerHTML = `
        <div class="form-group">
            <label>Título</label>
            <input id="s-titulo" type="text" value="${data.titulo}" class="form-input">
            
            <label>Texto/Descripción</label>
            <textarea id="s-texto" class="form-textarea">${data.texto}</textarea>
            
            <label>URL de Imagen</label>
            <input id="s-imagen" type="text" value="${data.imagen || ''}" class="form-input" placeholder="imagenes/ejemplo.jpg">
            
            <button class="btn-guardar" onclick="${saveFunction}">Guardar Cambios</button>
        </div>
    `;
    if (modulo === "secciones" && sub === "conferencias") {
        if (formAgregar) formAgregar.style.display = "block";
    }
}


// Función para mostrar el formulario de la sección "Especiales"
function mostrarEspecialesForm() {
    const data = getData().especiales;
    const carrusel = data.carrusel || [];

    let inputsCarrusel = carrusel.map((img, index) => `
         <div style="margin-bottom:10px;">
            <label>Imagen del carrusel ${index + 1}</label>
            <input 
                type="file" 
                id="e-carrusel-${index}" 
                class="form-input"
                accept="image/*"
            >
            <div>
                <small>Actual:</small><br>
                <img src="${img}" style="max-width:120px; border-radius:8px; margin-top:5px;">
            </div>
        </div>
    `).join("");

    document.getElementById("form-dinamico").innerHTML = `
        <div class="form-group">
            <label>Favoritos</label>
            <input id="e-subtitulo" type="text" value="${data.subtitulo}" class="form-input">
            
            <label>Autor</label>
            <textarea id="e-autor" class="form-textarea letra-autor">${data.autor}</textarea>
            
            <label>Descripción</label>
            <textarea id="e-texto" class="form-textarea">${data.texto}</textarea>

            <label>Imagen Principal</label>
            <input id="e-imagen" type="file" class="form-input" accept="image/*">
            ${data.imagen ? `<img src="${data.imagen}" style="max-width:150px; margin-top:5px;">` : ""}
           
            <h4>Imágenes del carrusel</h4>
            ${inputsCarrusel}

            <button class="btn-guardar" onclick="saveEspeciales()">Guardar Cambios</button>
        </div>
    `;
}

// Función para guardar los cambios realizados en la sección "Especiales"
async function saveEspeciales() {
    const data = getData();
    data.especiales.subtitulo = document.getElementById("e-subtitulo").value;
    data.especiales.autor = document.getElementById("e-autor").value;
    data.especiales.texto = document.getElementById("e-texto").value;
    const imagenPrincipalInput = document.getElementById("e-imagen");
    if (imagenPrincipalInput && imagenPrincipalInput.files[0]) {
        data.especiales.imagen = await leerArchivoComoBase64(imagenPrincipalInput.files[0]);
    }
    const nuevasImagenes = [];
    let i = 0;
    while (document.getElementById(`e-carrusel-${i}`)) {
        const fileInput = document.getElementById(`e-carrusel-${i}`);
        if (fileInput.files[0]) {
            const base64 = await leerArchivoComoBase64(fileInput.files[0]);
            nuevasImagenes.push(base64);
        } else {
            nuevasImagenes.push(data.especiales.carrusel[i]);
        }
        i++;
    }
    data.especiales.carrusel = nuevasImagenes;
    setData(data);
    alert("Cambios guardados en Especiales");
}

// Función para leer un archivo y convertirlo a base64(para las imagenes)
function leerArchivoComoBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result); 
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Función para cargar los datos de "Especiales" en la página correspondiente
function cargarEspecialesEnPagina() {
    const data = JSON.parse(localStorage.getItem("cmsData"));
    if (!data || !data.especiales) return;

    const subtitulo = document.getElementById("especiales-subtitulo");
    const autor = document.getElementById("especiales-autor");
    const texto = document.getElementById("especiales-texto");
    const imagen = document.getElementById("especiales-imagen");

    if (subtitulo) subtitulo.textContent = data.especiales.subtitulo;
    if (autor) autor.textContent = "Por: " + data.especiales.autor;
    if (texto) texto.textContent = data.especiales.texto;
    if (imagen) imagen.src = data.especiales.imagen;

    if (data.especiales.carrusel) {
        data.especiales.carrusel.forEach((src, index) => {
            const img = document.getElementById(`carrusel-img-${index}`);
            if (img) img.src = src;
        });
    }
}

document.addEventListener("DOMContentLoaded", cargarEspecialesEnPagina);

document.addEventListener("DOMContentLoaded", () => {
  const formAgregar = document.getElementById("form-agregar-conferencia");
  if (formAgregar) formAgregar.style.display = "none";
});


 function cerrarSesion() {
    localStorage.removeItem("logeado");
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
})


async function agregarConferencia() {
    const data = getData();

    if (!Array.isArray(data.secciones.conferencias)) {
        data.secciones.conferencias = [];
    }

    const nueva = {
        titulo: document.getElementById("c-titulo").value,
        texto: document.getElementById("c-texto").value,
        descripcion: document.getElementById("c-descripcion").value,
        imagenes: []
    };

    let i = 0;
    while (document.getElementById(`c-img-${i}`)) {
        const input = document.getElementById(`c-img-${i}`);
        if (input.files[0]) {
            const base64 = await leerArchivoComoBase64(input.files[0]);
            nueva.imagenes.push(base64);
        }
        i++;
    }

    data.secciones.conferencias.push(nueva);
    setData(data);

    alert("Conferencia agregada correctamente");
}


function cargarConferenciasEnPagina() {
  const data = getData();
  const contenedor = document.getElementById("lista-conferencias");
  if (!contenedor || !data.secciones || !data.secciones.conferencias) return;

  contenedor.innerHTML = "";

  data.secciones.conferencias.forEach((conf, index) => {
    contenedor.innerHTML += `
      <article class="conferencia-card">
        <h3>${conf.titulo}</h3>
        <p class="tarjeta-texto">${conf.texto}</p>

        <div class="galeria">
          <div class="visor">
            <img src="${conf.imagenes[0] || ""}">
          </div>
          <p style="color:#666; font-style:italic;">${conf.descripcion}</p>
        </div>
      </article>
    `;
  });
}

document.addEventListener("DOMContentLoaded", cargarConferenciasEnPagina);
