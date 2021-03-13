import { useEffect, useState } from "react";
import { displayImage } from "./requests";
import axios from "./axios";

const Banner = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }

  useEffect(() => {
    if (movies.length > 0) {
      getRandomMovie();

      const timer = setInterval(() => {
        getRandomMovie();
      }, 10 * 1000);

      return () => clearInterval(timer);
    }
  }, [movies]);

  function getRandomMovie() {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setRandomMovie(randomMovie);
  }

  return randomMovie ? (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50vw" }}>
        <h2>{randomMovie.title || randomMovie.name}</h2>
        <p>{randomMovie.overview}</p>
      </div>
      <div style={{ width: "50vw" }}>
        <img
          style={{ width: "100%" }}
          src={displayImage(randomMovie.backdrop_path)}
          alt={randomMovie.title || randomMovie.name}
        />
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Banner;
