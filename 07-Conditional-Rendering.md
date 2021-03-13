---
title: Conditional Rendering
---

# Conditional Rendering

```js
// src/requests.js
...
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
export const displayImage = (path) => `${imageBaseUrl}${path}`;
```

```jsx
// src/Banner.js

...
import { displayImage } from "./requests";

const Banner = ({ fetchUrl }) => {
  ...
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
```
