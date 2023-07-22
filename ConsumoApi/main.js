let elementos = "";

fetch("https://rickandmortyapi.com/api/character")
  .then((r) => {
    //console.log(r);
    return r.json();
  })
  .then((d) => {
    //console.log(d);

    var m = d.results;
    //console.log(m);
    for (let i = 0; i < m.length; i++) {
      elementos += `<article class="item">
      <div class="container_img"><img src="${m[i].image}" alt="alt" /></div>
      <div class="container_data">
            <div><h2>${m[i].name}</h2></div>
            <div><h3>${m[i].species}</h3></div>
            <div><h4>${m[i].status}</h4></div>
        </div></article>`;
      //console.log(m[i]);
    }
    document.getElementById("lista").innerHTML = elementos;
  });
