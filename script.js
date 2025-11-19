// 1. Buscamos el botón en el HTML usando su ID
const boton = document.getElementById('btn-prueba');

// 2. Le agregamos un "escucha" (listener) para el evento click
boton.addEventListener('click', function () {
    // 3. Esto es lo que pasa cuando hacen clic
    alert('¡Genial! Tu entorno de desarrollo está listo y funcionando.');
});