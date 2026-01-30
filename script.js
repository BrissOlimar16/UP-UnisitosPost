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