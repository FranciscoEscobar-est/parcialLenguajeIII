function validarNombre(nombre) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre);
}
function validarApellido(apellido) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido);
}
function validarDNI(dni) {
    return /^\d{8}$/.test(dni);
}
function validarFecha(fecha) {
    return fecha >= "2007-01-01";
}
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById("btnProgresivo").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const fecha = document.getElementById("fechaDeNacimiento").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nombre === "" || apellido === "" || dni === "" || fecha === "" || email === "") {
        alert("Ingrese todos los elementos por favor.");
        return;
    }
    if (!validarNombre(nombre)) {
        alert("El nombre solo debe contener letras.");
        return;
    }
    if (!validarApellido(apellido)) {
        alert("El apellido solo debe contener letras.");
        return;
    }
    if (!validarDNI(dni)) {
        alert("El DNI debe contener 8 numeros.");
        return;
    }
    if (!validarFecha(fecha)) {
        alert("La fecha debe ser posterior al año 2006.");
        return;
    }
    if (!validarEmail(email)) {
        alert("Ingrese un email válido.");
        return;
    }

    let html = "<h3>Datos registrados:</h3>";
    html += "<ul>";
    html += "<li><strong>Nombre:</strong> " + nombre + "</li>";
    html += "<li><strong>Apellido:</strong> " + apellido + "</li>";
    html += "<li><strong>DNI:</strong> " + dni + "</li>";
    html += "<li><strong>Fecha de nacimiento:</strong> " + fecha + "</li>";
    html += "<li><strong>Email:</strong> " + email + "</li>";
    html += "</ul>";
    document.getElementById("respuestasPrompt").innerHTML = html;

    document.getElementById("nombre").style.display = "none";
    document.getElementById("apellido").style.display = "none";
    document.getElementById("dni").style.display = "none";
    document.getElementById("fechaDeNacimiento").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("btnProgresivo").style.display = "none";
});

//prompt de preguntas
document.getElementById("btnPreguntas").addEventListener("click", function () {
    const nacionalidad = prompt("¿Cuál es tu nacionalidad?");
    const color = prompt("¿Cuál es tu color favorito?");
    const mascota = prompt("¿Cómo se llama tu mascota?");

    let html = "<h3>Respuestas a las preguntas:</h3>";
    html += "<ul>";
    html += "<li><strong>Nacionalidad:</strong> " + (nacionalidad ? nacionalidad : "Sin respuesta") + "</li>";
    html += "<li><strong>Color favorito:</strong> " + (color ? color : "Sin respuesta") + "</li>";
    html += "<li><strong>Nombre de tu mascota:</strong> " + (mascota ? mascota : "Sin respuesta") + "</li>";
    html += "</ul>";
    document.getElementById("preguntasProgresivas").innerHTML = html;
});