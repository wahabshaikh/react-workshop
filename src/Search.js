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
