let characters = "";
let API = "https://rickandmortyapi.com/api/character";

fetch(API)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var character = data.results;
    for (let i = 0; i < character.length; i++) {
      let c = character[i];
      characters += `
      
        <a href="detail.html?id=${c.id}">
            <article class="character">
                <div class="image">
                    <img src="${c.image}" alt="${c.name}" />
                </div>
                <div class="content">
                    <h2>${c.name}</h2>
                    <h3>${c.species}</h3>
                </div>
            </article>
        </a>
        `;
    }
    document.getElementById('lista').innerHTML = characters;
  });
