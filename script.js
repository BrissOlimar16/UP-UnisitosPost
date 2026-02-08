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
    texto: "Texto inicial de la gaceta universitaria.",
    imagen: "imagenes/portico.png"
  },
  secciones: {
    conferencias: {
      titulo: "Conferencias",
      texto: "Contenido de conferencias por defecto.",
      imagen: "imagenes/conferencia.jpg"
    },
    jornadas: {
      titulo: "Jornadas",
      texto: "Contenido de jornadas por defecto.",
      imagen: "imagenes/jornadas.jpg"
    },
    cultura: {
      titulo: "Cultura",
      texto: "Contenido de cultura por defecto.",
      imagen: "imagenes/cultura.jpg"
    },
    clubes: {
      titulo: "Clubes",
      texto: "Contenido de clubes por defecto.",
      imagen: "imagenes/clubes.jpg"
    }
  },
  avisos: {
    deportes: {
      titulo: "Deportes",
      texto: "Contenido de deportes por defecto.",
      imagen: "imagenes/basquet.jpg"
    },
    concursos: {
      titulo: "Concursos",
      texto: "Contenido de concursos por defecto.",
      imagen: "imagenes/concursos.jpg"
    },
    cartelera: {
      titulo: "Cartelera de la Semana",
      texto: "Contenido de cartelera por defecto.",
      imagen: "imagenes/cartelera.jpg"
    }
  },
  especiales: {
    titulo: "Especiales",
    texto: "Contenido especial por defecto.",
    imagen: "imagenes/especiales.jpg"
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
        wrap.style.display = "none";
        mostrarInicioForm();
    }

    if (modulo === "especiales") {
        mostrarEspecialesForm();
    }
}


function renderForm() {
    const sub = document.getElementById("subpagina").value;
    const form = document.getElementById("form-dinamico");
    const modulo = document.getElementById("modulo").value;

    form.innerHTML = "";

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
}


function mostrarInicioForm() {
    const data = getData().inicio;
    document.getElementById("form-dinamico").innerHTML = `
        <div class="form-group">
            <label>Título Principal</label>
            <input id="i-titulo" type="text" value="${data.titulo}" class="form-input">
            
            <label>Subtítulo</label>
            <input id="i-subtitulo" type="text" value="${data.subtitulo || ''}" class="form-input">
            
            <label>Texto/Descripción</label>
            <textarea id="i-texto" class="form-textarea">${data.texto}</textarea>
            
            <label>URL de Imagen</label>
            <input id="i-imagen" type="text" value="${data.imagen || ''}" class="form-input" placeholder="imagenes/portico.png">
            
            <button class="btn-guardar" onclick="saveInicio()">Guardar Cambios</button>
        </div>
    `;
}

function saveInicio() {
    const data = getData();
    data.inicio.titulo = document.getElementById("i-titulo").value;
    data.inicio.subtitulo = document.getElementById("i-subtitulo").value;
    data.inicio.texto = document.getElementById("i-texto").value;
    data.inicio.imagen = document.getElementById("i-imagen").value;
    setData(data);
    mostrarMensajeExito("Cambios guardados en Inicio");
}

function mostrarEspecialesForm() {
    const data = getData().especiales;
    document.getElementById("form-dinamico").innerHTML = `
        <div class="form-group">
            <label>Título</label>
            <input id="e-titulo" type="text" value="${data.titulo}" class="form-input">
            
            <label>Texto/Contenido</label>
            <textarea id="e-texto" class="form-textarea">${data.texto}</textarea>
            
            <label>URL de Imagen</label>
            <input id="e-imagen" type="text" value="${data.imagen || ''}" class="form-input" placeholder="imagenes/especiales.jpg">
            
            <button class="btn-guardar" onclick="saveEspeciales()">Guardar Cambios</button>
        </div>
    `;
}

function saveEspeciales() {
    const data = getData();
    data.especiales.titulo = document.getElementById("e-titulo").value;
    data.especiales.texto = document.getElementById("e-texto").value;
    data.especiales.imagen = document.getElementById("e-imagen").value;
    setData(data);
    mostrarMensajeExito("Cambios guardados en Especiales");
}

function saveSeccion(sub) {
    const data = getData();
    data.secciones[sub].titulo = document.getElementById("s-titulo").value;
    data.secciones[sub].texto = document.getElementById("s-texto").value;
    data.secciones[sub].imagen = document.getElementById("s-imagen").value;
    setData(data);
    mostrarMensajeExito(`Cambios guardados en ${sub}`);
}

function saveAvisos(sub) {
    const data = getData();
    data.avisos[sub].titulo = document.getElementById("s-titulo").value;
    data.avisos[sub].texto = document.getElementById("s-texto").value;
    data.avisos[sub].imagen = document.getElementById("s-imagen").value;
    setData(data);
    mostrarMensajeExito(`Cambios guardados en ${sub}`);
}


function mostrarMensajeExito(mensaje) {
    const div = document.createElement("div");
    div.className = "success-message";
    div.textContent = mensaje;
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.remove();
    }, 3000);
}


 function cerrarSesion() {
    localStorage.removeItem("logeado");
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
});