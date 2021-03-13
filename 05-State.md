---
title: State
---

# State

```jsx
// src/Search.js

const Search = () => {
  const query = "The Dark Knight";

  return (
    <form>
      <input type="text" placeholder="Search" value={query} />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Search;
```

## useState Hook

```jsx
// src/Search.js

import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <form>
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