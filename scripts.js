function getActors() {
    fetch('http://localhost:3000/actors')
        .then(response => response.json())
        .then(data => {
            let actorsTable = document.getElementById("actors");
            actorsTable.innerHTML = `
        <tr>
            <th>Actor ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Última Actualización</th>
        </tr>
    `;
            data.forEach(actor => {
                actorsTable.innerHTML += `
            <tr>
                <td>${actor.actor_id}</td>
                <td>${actor.first_name}</td>
                <td>${actor.last_name}</td>
                <td>${actor.last_update}</td>
            </tr>
        `;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            Swal.fire({
                title: 'Error al obtener datos',
                text: 'Hubo un problema al obtener datos de los actores',
                icon: 'error',
            });
        });
}

function addActor() {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    fetch('http://localhost:3000/actors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name, last_name })
    })
        .then(response => response.text())
        .then(data => {
            Swal.fire({
                title: data,
                icon: 'success',
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error al agregar actor',
                text: 'Hubo un problema al agregar un nuevo actor',
                icon: 'error',
            });
        });
}

function updateActor() {
    const id = document.getElementById('update_id').value;
    const first_name = document.getElementById('update_first_name').value;
    const last_name = document.getElementById('update_last_name').value;
    fetch(`http://localhost:3000/actors/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name, last_name })
    })
        .then(response => response.text())
        .then(data => {
            Swal.fire({
                title: data,
                icon: 'success',
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error al actualizar actor',
                text: 'Hubo un problema al actualizar el actor',
                icon: 'error',
            });
        });
}

async function deleteActor() {
    const id = document.getElementById('delete_id').value;
    try {
        const response = await fetch(`http://localhost:3000/actors/${id}`, {
            method: 'DELETE'
        });
        const data = await response.text();
        Swal.fire({
            title: data,
            icon: 'success',
        });
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error al eliminar actor',
            text: 'Hubo un problema al eliminar el actor',
            icon: 'error',
        });
    }
}
