import { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "./axios";

const Category = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }

  return (
    <section>
      <h2>{title}</h2>
      {movies.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title || movie.name}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </section>
  );
};

export default Category;
