import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Details from "./Details";
import Search from "./Search";
import requests from "./requests";

const categories = [
  { title: "Trending", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
];

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
          <Search />

          {categories.map((category) => (
            <Category
              key={category.title}
              title={category.title}
              fetchUrl={category.fetchUrl}
            />
          ))}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
