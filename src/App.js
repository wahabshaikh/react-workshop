import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";
import Results from "./Results";
import Search from "./Search";

const App = () => {
  return (
    <Router>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>
          <Link to="/">React Workshop</Link>
        </h1>
        <Search />
      </header>

      <Switch>
        <Route path="/movies/:id">
          <Details />
        </Route>

        <Route path="/search">
          <Results />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
