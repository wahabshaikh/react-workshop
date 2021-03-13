const Movie = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.poster_path} alt={props.title} />
    </div>
  );
};
