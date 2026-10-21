function abrirUbicacion() {
    var latitud = document.getElementById("latitud").value;
    var longitud = document.getElementById("longitud").value;

    if (latitud === "" || longitud === "") {
        alert("Ingrese la latitud y la longitud");
        return;
    }

    var url = "https://www.google.com/maps?q=" + latitud + "," + longitud;

    window.open(url, "_blank");
}