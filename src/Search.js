import { useState } from "react";
import axios from "./axios";
import requests from "./requests";

const Search = () => {
  const [query, setQuery] = useState("");

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
