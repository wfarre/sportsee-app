import { ReactComponent as Logo } from "./logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-wrapper">
        <Logo></Logo>
      </div>

      <li className="navbar">
        <ul className="navbar__item">
          <Link to="/user/dashboard">Accueil</Link>
        </ul>
        <ul className="navbar__item">
          <Link to="/user/12">Profil</Link>
        </ul>
        <ul className="navbar__item">
          <Link to="/user/dashboard">Réglages</Link>
        </ul>
        <ul className="navbar__item">
          <Link to="/user/dashboard">Communauté</Link>
        </ul>
      </li>
    </nav>
  );
}

export default Navbar;
