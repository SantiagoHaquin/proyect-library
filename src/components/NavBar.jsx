import { Link, NavLink } from "react-router-dom";
import Logo3 from "../assets/Logo3.png"

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#" to="/">
            Biblioteca Virtual UNR
          </Link>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <a href="">
              <img src={Logo3} alt="logo" style={{ width: "150px", height: "auto" }} />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Medicina
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/medicina/libros">
                      Libros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/medicina/bibliografia"
                    >
                      Bibliografia
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Enfermeria
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/enfermeria/libros">
                      Libros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/enfermeria">
                      Bibliografia
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fonoaudiologia
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/fonoaudiologia">
                      Libros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/fonoaudiologia">
                      Bibliografia
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
