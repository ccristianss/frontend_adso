const amigos = [
  { nombre: "Virginie", edad: 1},
  {
    nombre: "Cyndy",
    edad: 2,
  },
  {
    nombre: "Anett",
    edad: 3,
  },
  {
    nombre: "Ruthi",
    edad: 4,
  },
  {
    nombre: "Atlanta",
    edad: 5,
  },
  {
    nombre: "Arnuad",
    edad: 6,
  },
  {
    nombre: "Briana",
    edad: 7,
  },
  {
    nombre: "Ashien",
    edad: 8,
  },
  {
    nombre: "Lurette",
    edad: 9,
  },
  {
    nombre: "Alphonso",
    edad: 10,
  },
];


let salida = '';
for (let i = 0; i < amigos.length; i++) {
    salida = salida + `<li>${amigos[i].nombre} - ${amigos[i].edad}</li>`;
    console.log(amigos[i].nombre);
}
console.log(salida);
document.getElementById('lista').innerHTML = salida
console.log(amigos);