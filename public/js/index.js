window.onload = function() {
    const url = '/api/v1/propiedades';
    const table = document.getElementsByTagName('table')[0];

    async function obtenerPropiedades() {
        const response = await fetch(url);
        const data = await response.json();
        var propiedades = data.data;
        propiedades = propiedades.map(propiedad => {
          return {
            cod_prop: propiedad.cod_prop,
            descripcion: propiedad.descripcion,
            dimension: propiedad.dimension,
            tipo: propiedad.tipo,
            domicilio: propiedad.domicilio,
            estado: propiedad.estado,
          };
        });
        return propiedades;
    }

    console.log(obtenerPropiedades());

    llenarTabla = async () => {
        const propiedades = await obtenerPropiedades();
        const tbody = table.getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';
        propiedades.forEach(function (propiedad, index) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td></td>
                <td></td>
                <td></td>
                <td>${propiedad.dimension}</td>
                <td>${propiedad.descripcion}</td>
                <td><button id="prop_${index}" class="btn-ver-mas">+</button></td>`;
            tbody.appendChild(tr);
        });
    }
    llenarTabla();

        


    // cargarLocalidad = async () => {
    //   fetch("http://localhost:5000/api/v1/localidades")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log('data', data);
    //         let localidades = data.data;
    //         localidades.forEach(localidad => {
    //             let loc = document.createElement('p');
    //             loc.innerHTML = `${localidad.cod_postal} - ${localidad.nombre}`;
    //             body.appendChild(loc);
    //         });
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // };

    // cargarLocalidad();

}