let boton = document.getElementById("btnReg");
let botonlogin = document.getElementById("btnLogin");
let registroUser = []

const datosRegistro = (e) => {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("correo").value;
    let pass = document.getElementById("pass").value;
    let rePass = document.getElementById("passDup").value;

    userRegistro = { nombre, apellido, mail, pass, rePass};

    registroUser.push(userRegistro);

    









































































    
        localStorage.setItem("registros", JSON.stringify(registroUser))
    
    return registroUser();
}
 

boton?.addEventListener('click', datosRegistro);