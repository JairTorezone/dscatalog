import { Router, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "components/NavBar";
import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Admin from "pages/Admin";
import ProductDetails from "pages/ProductDetails";
import Auth from "pages/Admin/Auth";
import history from "util/history";

function Routes() {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Catalog />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        <Redirect from="/admin/auth" to="/admin/auth/login" exact />
        <Route path="/admin/auth">
          <Auth />
        </Route>
        <Redirect from="/admin" to="/admin/products" exact />
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
