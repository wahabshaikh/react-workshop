import { useLocation } from "react-router";
import Movie from "./Movie";

const Results = () => {
  const {
    state: { movies },
  } = useLocation();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title || movie.name}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default Results;
