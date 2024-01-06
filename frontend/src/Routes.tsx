import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "components/NavBar";
import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Admin from "pages/Admin";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Catalog />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
