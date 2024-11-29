const prof = {
    nombre: "",
    apellido: "",
    cedula: "",
}



function labelsToJSON() {


    let cedula = document.getElementById("cedulaProfesor").value;
    let nombre = document.getElementById("nombreProfesor").value;
    let apellido = document.getElementById("apellidoProfesor").value;

    if (cedula.length === 0 | cedula.nombre === 0 | cedula.apellido === 0) {
        document.getElementById("mensajeError").innerText = "Error: nombre, cedula o apellido esta vacio";
        document.getElementById("mensajeError").style.visibility = "visible";
        document.getElementById("mensajeError").style.fontSize = "20px";
    } else {
        prof.cedula = cedula;
        prof.apellido = apellido;
        prof.nombre = nombre;

        str = "{ nombre:" + "\""+nombre +"\""+",cedula:" + "\""+cedula +"\""+",apellido:"+"\""+apellido+"\""+"}"  
        document.getElementById("JSON").value = str;
        console.log(prof);
    }




}

function JSONtoLabels() {

    let json = document.getElementById("JSON").value;

    campos = json.split("\"");

    console.log(json)
    console.log(campos)

    if (json.length === 0) {
        document.getElementById("mensajeError").innerText = "Error: campo JSON esta vacio";
        document.getElementById("mensajeError").style.visibility = "visible";
        document.getElementById("mensajeError").style.fontSize = "20px";
    } else {
        
    document.getElementById("cedulaProfesor").value = campos [3];
    document.getElementById("nombreProfesor").value = campos[1];
     document.getElementById("apellidoProfesor").value= campos[5];
    }



}