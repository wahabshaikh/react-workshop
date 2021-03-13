import { useEffect, useState } from "react";
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

  return <div>Banner</div>;
};

export default Banner;
