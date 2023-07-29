function getParam(params) {
  var query = location.search;
  var parametros = new URLSearchParams(query);
  return parametros.get(params);
}
var name = getParam("name");
var lastname = getParam("lastname");
var telefono = getParam("telefono");
var email = getParam("email");
var datos = `
<h2>${name} ${lastname}</h2>
<h3>Telefono: ${telefono}</h3>
<h3>Correo: ${email}</h3>`;
document.getElementById("datos").innerHTML=datos;