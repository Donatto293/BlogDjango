function mostrarContenido(id) {
    var contentDiv = document.getElementById('post-content-' + id);
    if (contentDiv.style.display === "none") {
        contentDiv.style.display = "block";
    } else {
        contentDiv.style.display = "none";
    }
}