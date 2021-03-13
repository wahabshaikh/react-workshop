---
title: Lists and Keys
---

# Lists and Keys

```js
// src/requests.js

const requests = {
  ...
  fetchNowPlaying: `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
}
```

```jsx
// src/App.js

...
import Category from "./Category";

const categories = [
  { title: "Now Playing", fetchUrl: requests.fetchNowPlaying },
  { title: "Popular", fetchUrl: requests.fetchPopular },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Upcoming", fetchUrl: requests.fetchUpcoming },
];

const App = () => {
  return (
    <div>
      ...
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
```

```jsx
// src/Category.js

import { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "./axios";

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
// src/Movie.js

import { displayImage } from "./requests";

const Movie = (props) => {
  return (
    <div style={{ width: 250, margin: "0 auto" }}>
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src={displayImage(props.poster_path)}
        alt={props.title}
      />
      <h3>{props.title}</h3>
    </div>
  );
};

export default Movie;
```
