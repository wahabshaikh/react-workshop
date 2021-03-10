---
title: Forms
---

# Forms

```js
const requests = {
  ...
  fetchSearchResults: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
};
```

```jsx
  const [searchResults, setSearchResults] = useState([]);

  async function fetchSearch() {
    const response = await axios.get(`${requests.fetchSearchResults}${movie}`);
    console.log(response);
    setSearchResults(response.data.results);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchSearch();
      }}
    >
      ...
    </form>
  );
};
```