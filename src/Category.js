import { useEffect, useState } from "react";
import axios from "./axios";
import Movie from "./Movie";
import { posterBaseUrl } from "./requests";

const Category = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <section>
      <h2>{title}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title || movie.name}
            poster_path={`${posterBaseUrl}${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
