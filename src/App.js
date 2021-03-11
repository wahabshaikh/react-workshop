import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <h1>
        <Link to="/">React Workshop</Link>
      </h1>

      <Switch>
        <Route path="/movies/:id">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
