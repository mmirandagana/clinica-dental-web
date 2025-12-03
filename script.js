// Manejo del Menú Responsive (opcional, por si queremos mejorarlo luego)
// ...

// Manejo del Formulario de Contacto
const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function (evento) {
    // 1. Evitamos que la página se recargue (lo normal en un form)
    evento.preventDefault();

    // 2. Aquí iría el código para mandar el mail a un servidor real.
    // Como no tenemos servidor aún, simularemos el éxito.

    // 3. Mostramos una alerta bonita
    alert('¡Gracias por escribirnos! Nos pondremos en contacto contigo pronto.');

    // 4. Limpiamos el formulario
    formulario.reset();
});