const api = "http://localhost:3000/api";
const user = JSON.parse(localStorage.getItem("usuario")) || null;
const cardWrapper = document.getElementsByClassName("card-wrapper")[0];
console.log(cardWrapper);

if(!user){
    window.location.href= "index.html";//redireccionar 
}

const nombreUsuario = document.getElementById("nombre-usuario");
nombreUsuario.innerText=user.nombre;



function getCitas(){
    if(user.id_rol === 1){
        getCitasMedico();
    }else if(user.id_rol === 2){
        getCitasPaciente();
    }
}

async function getCitasPaciente(){
    const response = await fetch(`${api}/citas/paciente/${user.id_usuario}`,{ 
        method:"GET",
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }});

    const data = await response.json();
    console.log(data);
    mostrarCitas(data);
}

async function getCitasMedico(){
    const response = await fetch(`${api}/citas/medico/${user.id_usuario}`,{ 
        method:"GET",
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }});

    const data = await response.json();
    console.log(data);
    mostrarCitas(data);
}

function mostrarCitas(data){
    for (let index = 0; index < data.length; index++) {

        const cita = data[index];

        const divCard = document.createElement("div");
        const divContent =  document.createElement("div");
        const h3 = document.createElement("h3");
        const pFecha = document.createElement("p");
        const pEspecialidad = document.createElement("p");
        const pMedico = document.createElement("p");
        const pEstado = document.createElement("p");
        const pNovedad = document.createElement("p");
        const botonEditar = document.createElement("button");


        divCard.className = "card";
        divContent.className = "card-content";
        h3.className = "name-patient";
        pFecha.className = "detalle-cita";
        pEspecialidad.className = "detalle-cita";
        pMedico.className = "detalle-cita";
        pEstado.className = "detalle-cita";
        pNovedad.className = "detalle-cita";
        botonEditar.className = "edit";

        h3.innerText = `Paciente ${cita.Paciente}`;
        pFecha.innerHTML = `<strong>Fecha: </strong> ${formatoFecha(cita.fecha_hora)}`;
        pEspecialidad.innerHTML = `<strong>Especialidad: </strong> ${cita.Especialidad}`;
        pMedico.innerHTML = `<strong>Medico: </strong> ${cita.Medico}`;
        pEstado.innerHTML = `<strong>Estado: </strong> ${cita.Estado_Cita}`;
        pNovedad.innerHTML = `<strong>Novedad: </strong> ${cita.novedad || "Sin novedad"}`;
        botonEditar.innerText = `Editar Cita`;

        divContent.appendChild(h3);
        divContent.appendChild(pFecha);
        divContent.appendChild(pEspecialidad);
        divContent.appendChild(pMedico);
        divContent.appendChild(pEstado);
        divContent.appendChild(pNovedad);
        divContent.appendChild(botonEditar);

        divCard.appendChild(divContent);

        cardWrapper.appendChild(divCard);
        
    }
}

function formatoFecha(fecha){
    const formattedDate = new Date(fecha);

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Bogota'  // Set the timeZone to 'America/Bogota'
};

const formattedString = formattedDate.toLocaleDateString('es-ES', options);
console.log(formattedString);
return formattedString;
}

function salir(){
    localStorage.removeItem("usuario");
    window.location.href= "index.html";//redireccionar 
}
getCitas();