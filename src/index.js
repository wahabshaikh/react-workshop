const Movie = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.poster_path} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>React Workshop</h1>
      <Movie
        title="The Dark Knight"
        poster_path="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
      />
      <Movie
        title="Interstellar"
        poster_path="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
      />
      <Movie
        title="Inception"
        poster_path="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
