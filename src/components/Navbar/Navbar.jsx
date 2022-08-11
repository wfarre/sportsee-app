import { ReactComponent as Logo } from "./logo.svg";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-wrapper">
        <Logo></Logo>
      </div>

      <li className="navbar">
        <ul className="navbar__item">
          <a href="#">Accueil</a>
        </ul>
        <ul className="navbar__item">
          <a href="#">Profil</a>
        </ul>
        <ul className="navbar__item">
          <a href="#">Réglages</a>
        </ul>
        <ul className="navbar__item">
          <a href="#">Communauté</a>
        </ul>
      </li>
    </nav>
  );
}

export default Navbar;
