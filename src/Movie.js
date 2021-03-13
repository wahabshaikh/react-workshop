import { displayImage } from "./requests";

const Movie = (props) => {
  return (
    <div style={{ width: 250, margin: "0 auto" }}>
      <img
        style={{ width: "100%", objectFit: "contain" }}
        src={displayImage(props.poster_path)}
        alt={props.title}
      />
      <h3>{props.title}</h3>
    </div>
  );
};

export default Movie;
