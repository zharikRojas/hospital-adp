const api = "http://localhost:3000/api";
const botonLogin = document.getElementById("iniciarSesion");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("contrasena");
const spanError = document.getElementById("error");

if(localStorage.getItem("usuario")){
    window.location.href= "home.html";//redireccionar 
}

botonLogin.addEventListener("click",async ()=>{
    console.log("click en boton");
    const username = usernameInput.value;
    const password = passwordInput.value;

    if(username !== "" && password !== ""){
        try {
            console.log("llamar api");
        const usuario = {
            username:username,
            password: password
        }
        const response = await fetch(`${api}/auth`,{ 
            method:"POST",
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(usuario)});
            console.log(response);
        if (response) {

            const data = await response.json();
            if (data.error) {
                spanError.innerText = "Usuario y/o contraseña incorrectos";
            }else{
                localStorage.setItem("usuario", JSON.stringify(data[0]));

                window.location.href= "home.html";//redireccionar 
            }
        }
        
        } catch (error) {
            console.log(error);
            console.log("paso por el catch");
        }
        
      

    }else{
        console.log("username and password son requeridos");
    }
});