import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <Link to={`/movies/${props.id}`} style={{ width: 250, margin: "0 auto" }}>
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src={props.poster_path}
        alt={props.title}
      />
      <h3>{props.title}</h3>
    </Link>
  );
};

export default Movie;
