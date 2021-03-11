---
title: Folder Organisation
---

# Folder Organisation

```
.
├── node_modules/
├── public/
├── src/
│   ├── components/
|   |   ├── Category.js
|   |   ├── Movie.js
|   |   └── Search.js
│   ├── pages/
|   |   ├── Details.js
|   |   └── Home.js
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

```jsx
// src/components/Category.js

import { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "../utils/axios";
import { posterBaseUrl } from "../utils/requests";

const Category = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <section>
      <h2>{title}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title || movie.name}
            poster_path={`${posterBaseUrl}${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
```

```jsx
// src/components/Movie.js

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

import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  return <h1>{id}</h1>;
};

export default Details;
```

```jsx
// src/pages/Home.js

import Category from "../components/Category";
import Search from "../components/Search";
import requests from "../utils/requests";

const categories = [
  { title: "Trending", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
];

const Home = () => {
  return (
    <div>
      <Search />

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
