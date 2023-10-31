import React from "react";

const teams = [
  {
    name: "Cristian Silva",
    img: "./cristian_silva.jpg",
    rol: "Mandadero",
    contact: "3188694094",
  },
  {
    name: "John Quimbaya",
    img: "./john_quimbaya.jpg",
    rol: "Mandadero",
    contact: "3188694094",
  },
  {
    name: "Milton Yela",
    img: "./milton_yela.jpg",
    rol: "Mandadero",
    contact: "3188694094",
  },
  {
    name: "Lenin Montilla",
    img: "./lenin_montilla.jpg",
    rol: "Mandadero",
    contact: "3188694094",
  },
  {
    name: "Santiago Pasaje",
    img: "./santiago_pasaje.jpg",
    rol: "Mandadero",
    contact: "3188694094",
  },
  {
    name: "Israel Gomez",
    img: "./israel_gomez.jpg",
    rol: "Mandadero",
    contact: "3188694094",
  },
  {
    name: "Cristian Urbano",
    img: "./cristian_urbano.jpg",
    rol: "Mandadero",
    contact: "3188694094",
  },
];

function Team() {
  return (
    <div className="container-fluid text-center">
      <h2 className="fs-1">Nuestro Equipo</h2>
      <p className="fs-3">Mandaderos</p>
      <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center">
        <ItemData items={teams} />
      </div>
    </div>
  );
}
function ItemData(props) {
  const items = props.items;

  return (
    <>
      {items.map((item) => (
        <div className="col">
          <div
            key={item.name}
            className="card h-100"
            style={{ width: "18rem" }}
          >
            <img className="card-img-top" src={item.img} alt="" height="100%" />

            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.rol}</p>
              <p className="card-text">{item.contact}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export { Team };
