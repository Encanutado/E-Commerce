//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function guardarLogin(nombre, pw){
    if (nombre.trim() === "" || pw.trim() === ""){
        alert("Debe ingresar su nombre.");
        console.log(nombre.trim())

} else {
        localStorage.setItem("nombre", nombre.trim());
        localStorage.setItem("pw", pw.trim());

    window.location.href = "index.html"
 alert("Usuario:" + nombre + "pwseña:" + pw)
}}

