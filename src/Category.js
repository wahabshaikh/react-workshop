import { useEffect, useState } from "react";
import axios from "./axios";
import Movie from "./Movie";

const baseUrl = "https://image.tmdb.org/t/p/original/";

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
            poster_path={`${baseUrl}${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
