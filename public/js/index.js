window.onload = function() {

    const body = document.getElementsByTagName('body')[0];

    cargarLocalidad = async () => {
      fetch("http://localhost:5000/api/v1/localidades")
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
            let localidades = data.data;
            localidades.forEach(localidad => {
                let loc = document.createElement('p');
                loc.innerHTML = `${localidad.cod_postal} - ${localidad.nombre}`;
                body.appendChild(loc);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    cargarLocalidad();

}