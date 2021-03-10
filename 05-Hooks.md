---
title: Hooks
---

# Hooks

```jsx
const Search = () => {
  const movie = "The Dark Knight";

  return (
    <form>
      <input type="text" placeholder="Search" value={movie} />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Search;
```

## useState

```jsx
import { useState } from "react";

const Search = () => {
  const [movie, setMovie] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Search;
```
