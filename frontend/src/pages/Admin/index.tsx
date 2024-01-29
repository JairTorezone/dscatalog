import "./styles.css";

import Navbar from "./Navbar";
import { Switch } from "react-router-dom";
import Users from "./User";
import PrivateRoute from "components/PrivateRoute";

function Admin() {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
            <h1>Product CRUD</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>Category CRUD</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/users" roles={["ROLE_ADMIN"]}>
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
