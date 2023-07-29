let API = "https://rickandmortyapi.com/api/character";
var query = location.search;
var UriParams = new URLSearchParams(query);
var id = UriParams.get("id");
//console.log(id)
fetch(API + "/" + id)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    var episodes = data.episode;
    var episode = "";
    for (let i = 0; i < episodes.length; i++) {
      let e = episodes[i];
      episode += `
                      <h4>${e}</h4>
          `;
    }
    var detail = `
      <h1>${data.name}</h1>
      <div class="imageDetail">
        <img
          src="${data.image}"
          alt="${data.name}"
        />
      </div>

      <div>
        <h2>Status: ${data.status}</h2>
        <h3>species: ${data.species}</h3>
        <h3>gender: ${data.gender}</h3>
        <h3>origin: ${data.origin.name}</h3>
        <h3>location: ${data.location.name}</h3>
      </div>
      <div class="episodes">
      ${episode}
      </div>
      <div>
        <h3>${data.created}</h3>
      </div>
    `;
    document.getElementById("detail").innerHTML = detail;
  });
