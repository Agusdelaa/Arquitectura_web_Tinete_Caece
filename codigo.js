function procesarPeticion() {
    var url = document.getElementById("recurso").value;

    document.getElementById("contenidos").innerHTML = "";
    document.getElementById("estados").innerHTML = "";
    document.getElementById("cabeceras").innerHTML = "";
    document.getElementById("codigo").innerHTML = "";

    var peticion_http;
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }

    peticion_http.onreadystatechange = muestraContenido;

    function muestraContenido() {
        document.getElementById("estados").innerHTML += "Estado: " + peticion_http.readyState + "<br/>";

        if (peticion_http.readyState == 4) {
            document.getElementById("codigo").innerHTML = peticion_http.status + " " + peticion_http.statusText;
            document.getElementById("cabeceras").innerHTML = peticion_http.getAllResponseHeaders();
            document.getElementById("contenidos").innerHTML = peticion_http.responseText;
        }
    }

    peticion_http.open('GET', url, true);
    peticion_http.send();
}
