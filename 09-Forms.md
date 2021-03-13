---
title: Forms
---

# Forms

```js
// src/requests.js

const requests = {
  ...
  fetchQuery: (query) =>
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}`,
};
```

```jsx
// src/Search.js

...
const Search = () => {
  ...
  async function fetchSearchResults() {
    if (query) {
      const response = await axios.get(requests.fetchQuery(query));
      console.log(response);
      setQuery("");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchSearchResults();
      }}
    >
      ...
    </form>
  );
};
```