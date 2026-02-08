// script.js - Agregar al inicio del archivo

// Función para cargar header y footer
function loadComponents() {
    Promise.all([
        fetch('header.html').then(response => response.text()),
        fetch('footer.html').then(response => response.text())
    ]).then(([headerData, footerData]) => {
        document.getElementById('header-placeholder').innerHTML = headerData;
        document.getElementById('footer-placeholder').innerHTML = footerData;
        setActiveLink(); // Marcar link activo
        updateMenuForScreenSize(); // Actualizar menú según pantalla
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

// Función para actualizar el menú según el tamaño de pantalla
function updateMenuForScreenSize() {
    const isLargeScreen = window.innerWidth >= 769;
    const menuLateral = document.querySelector('.menu-lateral');
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const mainContent = document.querySelector('.main-content');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    if (isLargeScreen) {
        // Agregar clases para pantalla grande
        menuLateral.classList.add('large');
        menuBtn.classList.add('large');
        menuOverlay.classList.add('large');
        mainContent.classList.add('large');
        header.classList.add('large');
        footer.classList.add('large');
    } else {
        // Remover clases para pantalla pequeña
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


//función para el login del administrador
const boton=document.getElementById("Ingresar");
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
    return false;
});


const DEFAULT_DATA = {
  inicio: {
    titulo: "Gaceta Universitaria",
    subtitulo: "Acerca de",
    texto: "Texto inicial de la gaceta universitaria."
  },
  secciones: {
    conferencias: {
      titulo: "Conferencias",
      texto: "Contenido de conferencias por defecto."
    }
  },
  avisos: {
    deportes: {
      titulo: "Deportes",
      texto: "Contenido de deportes por defecto."
    }
  }
};

function getData() {
  return JSON.parse(localStorage.getItem("cmsData")) || DEFAULT_DATA;
}

function setData(data) {
  localStorage.setItem("cmsData", JSON.stringify(data));
}


function onModuloChange() {
    const modulo = document.getElementById("modulo").value;
    const wrap = document.getElementById("subpagina-wrap");
    const subSelect = document.getElementById("subpagina");
    const form = document.getElementById("form-dinamico");

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

    if (modulo === "inicio") {
    }

    if (modulo === "especiales") {
    }
}



function renderForm() {
    const sub = document.getElementById("subpagina").value;
    const form = document.getElementById("form-dinamico");

    form.innerHTML = "";

    if (!sub) return;

    const data = getData().secciones[sub] || { titulo: "", texto: "" };

    form.innerHTML = `
        <label>Título</label>
        <input id="s-titulo" value="${data.titulo}">
        <label>Texto</label>
        <textarea id="s-texto">${data.texto}</textarea>
        <button class="btn" onclick="saveSeccion('${sub}')">Guardar</button>
    `;
}


