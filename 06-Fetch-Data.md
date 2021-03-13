---
title: Fetch Data
---

# Fetch Data

- [The Movie Database](https://www.themoviedb.org/)
- [TMDb API](https://developers.themoviedb.org/3)

## axios

```shell
npm i axios
```

```js
// src/axios.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
```

## Environment Variables

```
REACT_APP_API_KEY=<<TMDb_API_KEY>>
```

```js
// src/requests.js

const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
};

export default requests;
```

## useEffect Hook

```jsx
// src/App.js

...
import Banner from "./Banner";
import requests from "./requests";

const App = () => {
  return (
    <div>
      ...
      <Banner fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
```

```jsx
// src/Banner.js

import { useEffect, useState } from "react";
import axios from "./axios";

const Banner = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(fetchUrl);
    console.log(response);
    setMovies(response.data.results);
  }

  return <div>Banner</div>;
};

export default Banner;
```

```jsx
// src/Banner.js

const Banner = () => {
  ...
  const [randomMovie, setRandomMovie] = useState(null);

  ...
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
    console.log(randomMovie);
    setRandomMovie(randomMovie);
  }
  ...
}
```