// function busqueda() {
// document.getElementById("box2").style.visibility = "visible";
//  }

//llamado a la api con fetch//
fetch("http://www.psep.cl/api/Bip.php?&numberBip=666"
).then(response => response.json()
).then(respuestaJason => {
    console.log(respuestaJason);
})