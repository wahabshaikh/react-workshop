import { useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function fetchSearchResults() {
    try {
      const response = await axios.get(requests.fetchQuery(query));
      console.log(response);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
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
