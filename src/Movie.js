const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <small>{props.release_date}</small>
      <img src={props.poster_path} alt={props.title} />
    </div>
  );
};

export default Movie;
