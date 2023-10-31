import React from "react";

function Header() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          <a href="tel:+573188694094">
            <span> Llamar: +573188694094 </span>
          </a>
        </div>
        <div className="col">
          <a href="index.html"> MANDADEROS </a>
        </div>
        <div className="col">
          <button>
            <a href=""> Ingresar </a>
          </button>
          <button>
            <a href=""> Registrarse </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Header };
