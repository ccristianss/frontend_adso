let tarjetas = '';

fetch('https://rickandmortyapi.com/api/character')
.then(respuesta => {
    return respuesta.json();
})
.then(datos =>{
    //console.log(datos);
    var items = datos.results;
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        //tarjetas+= items[i].name;
        tarjetas+= `
        <article class="tarjeta">
            <div class="cont_imagen">
                <img src="${items[i].image}" alt="${items[i].name}">
            </div>
            <div class="cont_texto">
                <h2>
                    ${items[i].name}
                </h2>
                <h3>
                    ${items[i].species}
                </h3>
            </div>
        </article>`;
    }
    document.getElementById('lista').innerHTML= tarjetas;


})