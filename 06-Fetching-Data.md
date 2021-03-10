---
title: Fetching Data
---

# Fetching Data

[The Movie Database](https://www.themoviedb.org/)
[TMDb API](https://developers.themoviedb.org/3)


```shell
npm i axios
```

```js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
```

```js
const API_KEY = "69a51535058185ccfcea09c854204232";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
```


## useEffect

```jsx
import Category from "./Category";
import requests from "./requests";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <h1>React Workshop</h1>
      <Search />

      <Category title="Trending" fetchUrl={requests.fetchTrending} />
      <Category title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
};

export default App;
```

```jsx
import { useEffect, useState } from "react";
import axios from "./axios";
import Movie from "./Movie";

const baseUrl = "https://image.tmdb.org/t/p/original/";

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
            title={movie.title || movie.name}
            poster_path={`${baseUrl}${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
```

```jsx
const Movie = (props) => {
  return (
    <div style={{ width: 250, margin: "0 auto" }}>
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src={props.poster_path}
        alt={props.title}
      />
      <h3>{props.title}</h3>
    </div>
  );
};

export default Movie;
```

