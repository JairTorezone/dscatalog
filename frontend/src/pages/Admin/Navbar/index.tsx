import "./styles.css";

function Navbar() {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <a href="link" className="active admin-nav-item">
            <li>Produtos</li>
          </a>
        </li>

        <li>
          <a href="link" className="admin-nav-item">
            <li>Categorias</li>
          </a>
        </li>

        <li>
          <a href="link" className="admin-nav-item">
            <li>Usuários</li>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
