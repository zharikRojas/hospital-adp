const api = "http://localhost:3000/api";
const user = JSON.parse(localStorage.getItem("usuario")) || null;
const pacientesComboBox = document.getElementById("comboBox-paciente");
const fecha_Cita = document.getElementById("fecha-cita");
const especialidadComboBox = document.getElementById("comboBox-especialidad");
const nombre_medico = document.getElementById("medico");
nombre_medico.innerText = user.nombre;
const estado_cita_comboBox = document.getElementById("comboBox-estado-cita");
const novedadInput = document.getElementById("novedad");
const botonGuardar = document.getElementById("crear-cita");
const spanError = document.getElementById("error");
const cita = JSON.parse(localStorage.getItem("citaId")) || null;


if (cita) {
    getCita();
}else{
    document.addEventListener("DOMContentLoaded", getPacientes);
}


async function getCita(){
    const response = await fetch(`${api}/citas/${cita}`,{ 
        method:"GET",
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }});
    const data = await response.json();
        pacientesComboBox.innerHTML ="";
        especialidadComboBox.innerHTML ="";

    const pacienteOption = document.createElement("option");
    const especialidadOption = document.createElement("option");
    const fecha =formatoFecha(data[0].fecha_hora, 2);

    pacienteOption.text = data[0].Paciente;
    especialidadOption.text = data[0].Especialidad;
    pacientesComboBox.add(pacienteOption);
    especialidadComboBox.add(especialidadOption);
    fecha_Cita.value = fecha;
    novedadInput.value = data[0].novedad || "Sin novedad";
    nombre_medico.innerText = data[0].Medico;

}

async function getPacientes(){
    const response = await fetch(`${api}/pacientes`,{ 
        method:"GET",
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }});

    const data = await response.json();

    pacientesComboBox.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var paciente = data[i];
        var option = document.createElement("option");
        option.value = paciente.id_usuario;
        option.text = paciente.Nombre_Paciente;
        pacientesComboBox.add(option);
    }
}

botonGuardar.addEventListener("click",async ()=>{

    if (cita) {

        const estadoCita = (estado_cita_comboBox.value)*1;
        const novedad = novedadInput.value;

        try {
            const datosCita = {
                id_estadoCita: estadoCita,
                novedad: novedad
            }

            await fetch(`${api}/citas/${cita}`,{ 
                method:"POST",
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosCita)});

            localStorage.removeItem("citaId");
            window.location.href = "home.html";

        } catch (error) {
            console.log(error);
        }


    } else {
        const paciente = (pacientesComboBox.value)*1;
        const fecha = formatoFecha(fecha_Cita.value,1);
        const especialidad = (especialidadComboBox.value)*1;
        const medicoId = user.id_usuario;
        const estado_cita = (estado_cita_comboBox.value)*1;

        if (fecha !== "") {
                try {
                    const citaNueva = {
                        fechaHoraCita: fecha,
                        id_especialidad: especialidad,
                        id_paciente: paciente,
                        id_medico: medicoId,
                        id_estadoCita: estado_cita
                    }

                await fetch(`${api}/citas`,{ 
                    method:"POST",
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(citaNueva)});
        
                window.location.href = "home.html";
                        
                
            } catch (error) {
                console.log(error);
            }
        }else{
            spanError.innerText = "Ingrese una fecha para la cita."
        }

    }
    
});

function formatoFecha(fechaInput,id){
    const fecha = new Date(fechaInput);
   

    if(id === 1){
        const fechaFormateada = fecha.getFullYear().toString().slice(2) + '-' + 
                           ('0' + (fecha.getMonth() + 1)).slice(-2) + '-' + 
                           ('0' + fecha.getDate()).slice(-2) + ' ' +
                           ('0' + fecha.getHours()).slice(-2) + ':' +
                           ('0' + fecha.getMinutes()).slice(-2) + ':' +
                           ('0' + fecha.getSeconds()).slice(-2);
        return fechaFormateada;

    }else if (id === 2) {
        const fechaFormateada =
        fecha.getFullYear() + '-' +
        ('0' + (fecha.getMonth() + 1)).slice(-2) + '-' +
        ('0' + fecha.getDate()).slice(-2) + 'T' +
        ('0' + fecha.getHours()).slice(-2) + ':' +
        ('0' + fecha.getMinutes()).slice(-2);
        return fechaFormateada;
    }
}

