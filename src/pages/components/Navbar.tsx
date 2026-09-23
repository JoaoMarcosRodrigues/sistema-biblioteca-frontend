import { Link } from "react-router";
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container-nav">
        <Link
          to="/"
          className="link"
        >
          Home
        </Link>
        <Link
          to="/autor"
          className="link"
        >
          Autor
        </Link>
        <Link
          to="/livro"
          className="link"
        >
          Livro
        </Link>
        <Link
          to="/leitor"
          className="link"
        >
          Leitor
        </Link>
        <Link
          to="/emprestimo"
          className="link"
        >
          Empréstimo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
