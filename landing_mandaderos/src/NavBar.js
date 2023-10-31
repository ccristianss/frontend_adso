//import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mandaderos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            <a class="nav-link" href="#">Nosotros</a>
            <a class="nav-link" href="#">Servicios</a>
            <a class="nav-link" href="#">Contactanos</a>
          </div>
        </div>
      </div>
      </nav>
    </div>
  );
}

export { NavBar };
