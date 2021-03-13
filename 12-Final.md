---
title: Final
---

# Final

```
.
├── node_modules/
├── public/
├── src/
│   ├── components/
|   |   ├── Banner.js
|   |   ├── Category.js
|   |   ├── Movie.js
|   |   └── Search.js
│   ├── pages/
|   |   ├── Details.js
|   |   ├── Home.js
|   |   └── Results.js
|   ├── utils/
|   |   ├── axios.js
|   |   └── requests.js
│   ├── App.js
│   └── index.js
├── .env
├── .gitignore
├── package-lock.json
└── package.json
```

```js
// src/utils/axios.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
```

```js
// src/utils/requests.js

const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchNowPlaying: `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchQuery: (query) =>
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}`,
  fetchDetails: (id) =>
    `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchVideos: (id) =>
    `/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
};

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
export const displayImage = (path) => `${imageBaseUrl}${path}`;

export default requests;
```

```jsx
// src/components/Banner.js

import { useEffect, useState } from "react";
import { displayImage } from "../utils/requests";
import axios from "../utils/axios";

const Banner = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }

  useEffect(() => {
    if (movies.length > 0) {
      getRandomMovie();

      const timer = setInterval(() => {
        getRandomMovie();
      }, 10 * 1000);

      return () => clearInterval(timer);
    }
  }, [movies]);

  function getRandomMovie() {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setRandomMovie(randomMovie);
  }

  return randomMovie ? (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50vw" }}>
        <h2>{randomMovie.title || randomMovie.name}</h2>
        <p>{randomMovie.overview}</p>
      </div>
      <div style={{ width: "50vw" }}>
        <img
          style={{ width: "100%" }}
          src={displayImage(randomMovie.backdrop_path)}
          alt={randomMovie.title || randomMovie.name}
        />
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Banner;
```

```jsx
// src/components/Category.js

import { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "../utils/axios";

const Category = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }

  return (
    <section>
      <h2>{title}</h2>
      {movies.length > 0 ? (
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
      ) : (
        <h3>Loading...</h3>
      )}
    </section>
  );
};

export default Category;
```

```jsx
// src/components/Movie.js

import { Link } from "react-router-dom";
import { displayImage } from "../utils/requests";

const Movie = (props) => {
  return (
    <Link to={`/movies/${props.id}`} style={{ width: 250, margin: "0 auto" }}>
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src={displayImage(props.poster_path)}
        alt={props.title}
      />
      <h3>{props.title}</h3>
    </Link>
  );
};

export default Movie;
```

```jsx
// src/components/Search.js

import { useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function fetchSearchResults() {
    try {
      const response = await axios.get(requests.fetchQuery(query));
      console.log(response);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchSearchResults();
      }}
    >
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Search;
```

```jsx
// src/pages/Details.js

import { Component } from "react";
import { withRouter } from "react-router-dom";
import requests, { displayImage } from "../utils/requests";
import axios from "../utils/axios";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const movieResponse = await axios.get(
      requests.fetchDetails(this.props.match.params.id)
    );
    this.setState(Object.assign({ ...this.state, movie: movieResponse.data }));

    const trailerResponse = await axios.get(
      requests.fetchVideos(this.props.match.params.id)
    );
    this.setState({
      ...this.state,
      loading: false,
      trailer: trailerResponse.data.results[0],
    });
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const {
      title,
      name,
      homepage,
      genres,
      overview,
      release_date,
      runtime,
      backdrop_path,
    } = this.state.movie;
    const { key } = this.state.trailer;

    return (
      <section>
        <div style={{ display: "flex" }}>
          <div style={{ maxWidth: "50vw" }}>
            <h2>
              <a href={homepage}>{title || name}</a>
            </h2>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p>{overview}</p>
            <div>Released: {release_date}</div>
            <div>Runtime: {runtime}</div>
          </div>
          <div style={{ maxWidth: "50vw" }}>
            <img
              style={{ width: "100%" }}
              src={displayImage(backdrop_path)}
              alt={title || name}
            />
          </div>
        </div>
        <iframe
          style={{ maxWidth: "100vw", maxHeight: "100vw" }}
          title={this.state.trailer.name}
          src={`https://www.youtube.com/embed/${key}`}
        ></iframe>
      </section>
    );
  }
}

export default withRouter(Details);
```

```jsx
// src/pages/Home.js

import Banner from "../components/Banner";
import Category from "../components/Category";
import requests from "../utils/requests";

const categories = [
  { title: "Now Playing", fetchUrl: requests.fetchNowPlaying },
  { title: "Popular", fetchUrl: requests.fetchPopular },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Upcoming", fetchUrl: requests.fetchUpcoming },
];

const Home = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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

```jsx
// src/pages/Results.js

import { useLocation } from "react-router";
import Movie from "../components/Movie";

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

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Search from "./components/Search";

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
```

```jsx
// src/index.js

import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```