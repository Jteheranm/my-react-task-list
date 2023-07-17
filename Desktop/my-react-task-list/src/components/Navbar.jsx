import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="app-navbar">
      <h1>LISTA DE TAREAS App</h1>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" end>
            Sobre nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" end>
            Tareas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
