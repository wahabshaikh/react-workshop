---
title: Create React App
---

# Create React App

A JavaScript build toolchain typically consists of:
- A **package manager**, such as [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/). It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
- A **bundler**, such as [webpack](https://webpack.js.org/) or [Parcel](https://parceljs.org/). It lets you write modular code and bundle it together into small packages to optimize load time.
- A **compiler** such as [Babel](https://babeljs.io/). It lets you write modern JavaScript code that still works in older browsers.

[create-react-app](https://create-react-app.dev/)

```shell
npx create-react-app .
```

```jsx
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

```jsx
import Movie from "./Movie";

const App = () => {
  return (
    <div>
      <h1>React Workshop</h1>
      <Movie
        title="The Dark Knight"
        release_date="2012-07-20"
        poster_path="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
      />
      <Movie
        title="Interstellar"
        release_date="2014-11-07"
        poster_path="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
      />
      <Movie
        title="Inception"
        release_date="2010-07-16"
        poster_path="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
      />
    </div>
  );
};

export default App;
```

```jsx
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
```