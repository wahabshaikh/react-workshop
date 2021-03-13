import { useState } from "react";
import { useHistory } from "react-router";
import axios from "./axios";
import requests from "./requests";

const Search = () => {
  const history = useHistory();
  const [query, setQuery] = useState("");

  async function fetchSearchResults() {
    if (query) {
      const response = await axios.get(requests.fetchQuery(query));
      history.push({
        pathname: "/search",
        search: `?q=${query}`,
        state: { movies: response.data.results },
      });
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
