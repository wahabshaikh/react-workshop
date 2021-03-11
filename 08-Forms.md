---
title: Forms
---

# Forms

```js
  fetchQuery: (query) =>
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}`,
```

```js
  const [searchResults, setSearchResults] = useState([]);

  async function fetchSearchResults() {
    const response = await axios.get(requests.fetchQuery(query));
    console.log(response);
    setSearchResults(response.data.results);
  }
```

```jsx
  <form
    onSubmit={(e) => {
      e.preventDefault();
      fetchSearchResults();
    }}
  >
  ...
  </form>
```

```js
  async function fetchSearchResults() {
    try {
      const response = await axios.get(requests.fetchQuery(query));
      console.log(response);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }
```