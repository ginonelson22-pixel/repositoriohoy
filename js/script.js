// JavaScript compartido: seis formas de manipular el DOM.
document.addEventListener('DOMContentLoaded', () => {
  // 1. Cambiar contenido con textContent
  const cambiar = document.querySelector('#btn-cambiar');
  cambiar?.addEventListener('click', () => {
    document.querySelector('#mensaje-bienvenida').textContent = 'Mark Zuckerberg: fundador de Facebook y director ejecutivo de Meta.';
  });

  // 2. Modificar estilos CSS desde JavaScript
  const estilos = document.querySelector('#btn-estilos');
  estilos?.addEventListener('click', () => {
    const perfil = document.querySelector('#texto-perfil');
    perfil.style.color = '#146e61';
    perfil.style.fontWeight = '700';
    perfil.style.backgroundColor = '#e2faf4';
    perfil.style.padding = '14px';
  });

  // 3. Agregar y quitar clases CSS con classList.toggle
  const destacar = document.querySelector('#btn-destacar');
  destacar?.addEventListener('click', () => {
    document.querySelector('#experiencia-principal').classList.toggle('highlighted');
  });

  // 4. Consultar y modificar atributos con getAttribute y setAttribute
  const botonFoto = document.querySelector('#btn-foto');
  botonFoto?.addEventListener('click', () => {
    const foto = document.querySelector('#foto-perfil');
    const textoActual = foto.getAttribute('alt');
    const nuevoTexto = textoActual === 'Imagen ilustrativa para la biografía de Mark Zuckerberg'
      ? 'Imagen de presentación del perfil de Mark Zuckerberg'
      : 'Imagen ilustrativa para la biografía de Mark Zuckerberg';
    foto.setAttribute('alt', nuevoTexto);
    document.querySelector('#atributo-resultado').textContent = 'Atributo alt actual: ' + foto.getAttribute('alt');
  });

  // 5. Escuchar eventos de tres formas: addEventListener, onclick y atributo HTML onchange.
  const eventoClick = document.querySelector('#evento-click');
  eventoClick?.addEventListener('click', () => {
    document.querySelector('#salida-eventos').textContent = 'Evento click detectado con addEventListener().';
  });
  const eventoMouse = document.querySelector('#evento-mouse');
  if (eventoMouse) {
    eventoMouse.onclick = () => {
      document.querySelector('#salida-eventos').textContent = 'Evento onclick detectado mediante propiedad JS.';
    };
  }

  // 6. Crear, insertar y eliminar elementos con createElement, appendChild y remove().
  const agregar = document.querySelector('#btn-agregar');
  agregar?.addEventListener('click', () => {
    const lista = document.querySelector('#lista-proyectos');
    const nuevo = document.createElement('li');
    nuevo.className = 'list-group-item extra-item';
    nuevo.textContent = 'Elemento agregado con JavaScript: nuevo proyecto tecnológico de ejemplo.';
    lista.appendChild(nuevo);
  });
  const quitar = document.querySelector('#btn-quitar');
  quitar?.addEventListener('click', () => {
    const lista = document.querySelector('#lista-proyectos');
    const ultimo = lista.lastElementChild;
    if (ultimo && ultimo.classList.contains('extra-item')) ultimo.remove();
    else document.querySelector('#salida-proyectos').textContent = 'No quedan proyectos agregados por JavaScript.';
  });
});

// Tercera forma de evento: onchange definido directamente en el HTML.
function mostrarFormacion(select) {
  const destino = document.querySelector('#salida-formacion');
  if (destino) destino.textContent = select.value ? 'Seleccionaste: ' + select.value : 'Selecciona una opción.';
}
