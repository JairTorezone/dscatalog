import { NavLink } from "react-router-dom";
import { hasAnyRoles } from "util/auth";

import "./styles.css";

function Navbar() {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <NavLink to="/admin/products" className="admin-nav-item">
            <li>Produtos</li>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/categories" className="admin-nav-item">
            <li>Categorias</li>
          </NavLink>
        </li>

        {hasAnyRoles(["ROLE_ADMIN"]) && (
          <li>
            <NavLink to="/admin/users" className="admin-nav-item">
              <li>Usuários</li>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
