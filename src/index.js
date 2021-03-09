const Movie = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.title),
    React.createElement("small", {}, props.release_date),
    React.createElement("img", {
      src: props.poster_path,
    }),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "React Workshop"),
    React.createElement(Movie, {
      title: "The Dark Knight Rises",
      release_date: "2012-07-20",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    }),
    React.createElement(Movie, {
      title: "Interstellar",
      release_date: "2014-11-07",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    }),
    React.createElement(Movie, {
      title: "Inception",
      release_date: "2010-07-16",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
