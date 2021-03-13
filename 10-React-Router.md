---
title: React Router
---

# React Router

[React Router](https://reactrouter.com/)

```shell
npm i react-router-dom
```

```jsx
// src/Home.js

import Banner from "./Banner";
import Category from "./Category";
import requests from "./requests";

const categories = [
  { title: "Now Playing", fetchUrl: requests.fetchNowPlaying },
  { title: "Popular", fetchUrl: requests.fetchPopular },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Upcoming", fetchUrl: requests.fetchUpcoming },
];

const Home = () => {
  return (
    <div>
      <Banner fetchUrl={requests.fetchTrending} />
      {categories.map((category) => (
        <Category
          key={category.title}
          title={category.title}
          fetchUrl={category.fetchUrl}
        />
      ))}
    </div>
  );
};

export default Home;
```

## Routes

```jsx
// src/App.js

import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";

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
        <h1>React Workshop</h1>
        <Search />
      </header>

      <Route path="/movies/:id">
        <Details />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
};
```

## Switch
```jsx
// src/App.js

const App = () => {
  return (
    <Router>
      ...
      <Switch>
        ...
      </Switch>
    </Router>
  );
};
```

## Link

```jsx
// src/Movie.js

import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <Link to={`/movies/${props.id}`} style={{ width: 250, margin: "0 auto" }}>
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src={props.poster_path}
        alt={props.title}
      />
      <h3>{props.title}</h3>
    </Link>
  );
};
```

## Route Parameters

```jsx
// src/Details.js
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  return <h1>{id}</h1>;
};

export default Details;
```

## Programmatic Routing

```jsx
// src/Search.js

import { useHistory } from "react-router";

const Search = () => {
  const history = useHistory();

  async function fetchSearchResults() {
    if (query) {
      const response = await axios.get(requests.fetchQuery(query));
      history.push({
        pathname: "/search",
        search: `?q=${query}`,
        state: { movies: response.data.results },
      });
      setQuery("");
    }
  }
};
```

```jsx
// src/Results.js

import { useLocation } from "react-router";
import Movie from "./Movie";

const Results = () => {
  const {
    state: { movies },
  } = useLocation();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title || movie.name}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default Results;
```

```jsx
// src/App.js

import Results from "./Results";

const App = () => {
  return (
    ...
    <Route path="/search">
      <Results />
    </Route>
    ... 
  );
};
```