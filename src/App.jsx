import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Order from "./pages/Order/Order";
import Success from "./pages/Success/Success";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Order">
          <Order />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
