function Foother() {
  return (
    <footer className="container-fluid mt-5">
      <div>
        <div className="row">
          <div className="col">
            <h3>Nuestra Compañia</h3>
            <p>Somos un proyecto que busca solucionar</p>
            <a href="#">Ver más</a>
          </div>
          <div className="col">
            <h3>Ubicacion</h3>
            <ul>
              <li>
                Centro de Teleinformatica y Produccion Industrial
                <span>Popayán Cauca</span>
              </li>
              <li>
                <a href="mailto:informacion@mandaderos.com">
                  {" "}
                  informacion@mandaderos.com
                </a>
              </li>
              <li>+57 318 869 4094</li>
              <li>
                <a href="#"> www.mandaderos.com</a>
              </li>
              <li>Horarios : 8:00 a.m - 5:00 p.m</li>
            </ul>
          </div>
          <div className="col">
            <h3>Boletin informativo</h3>
            <div>
              <div>
                <form action="#" method="post">
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Ingresa tu correo..."
                    required=""
                  />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
            <div class="footer-social">
              <div>
                <h3 class="mb-sm-5 mb-4">Nuestras Redes Sociales</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f">FB Mandaderos</i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter">TW Mandaderos</i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in">IN Mandaderos</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            <p>© 2023 Mandaderos. Todos los Derechos Reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Foother };
