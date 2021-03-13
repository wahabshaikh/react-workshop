---
title: Components
---

# Components

```html
<script src="./index.js"></script>
```

## Component

```js
// src/index.js

const Movie = () => {
  return React.createElement("div", null, [
    React.createElement("h2", null, "The Dark Knight Rises"),
    React.createElement("img", {
      src:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      alt: "The Dark Knight Rises",
    }),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "React Workshop"),
    React.createElement(Movie),
    React.createElement(Movie),
    React.createElement(Movie),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

## Props

```js
// src/index.js

const Movie = (props) => {
  return React.createElement("div", null, [
    React.createElement("h2", null, props.title),
    React.createElement("img", {
      src: props.poster_path,
      alt: props.title,
    }),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "React Workshop"),
    React.createElement(Movie, {
      title: "The Dark Knight Rises",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    }),
    React.createElement(Movie, {
      title: "Interstellar",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    }),
    React.createElement(Movie, {
      title: "Inception",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

