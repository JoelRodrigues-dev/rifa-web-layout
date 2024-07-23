import "./style.css";
import { Link } from "react-router-dom";

const Header = ({ onButtonClick }) => {
  return (
    <header>
      <div className="header-title">
        <h1>Hello World!</h1>
      </div>
      <nav className="links-header">
        <Link to="/">Sorteios</Link>
        <Link to="/sorteios-ao-vivo">Sorteios ao vivo</Link>
        <Link to="/sobre-nos">Sobre nós</Link>
        <Link to="/resultados">Resultados</Link>
      </nav>
      <div>
        <button type="button" className="btn-ticket" onClick={onButtonClick}>
          Meus Titulos
        </button>
      </div>
    </header>
  );
};

export default Header;
