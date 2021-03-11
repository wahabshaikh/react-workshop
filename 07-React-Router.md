---
title: React Router
---

# React Router

```shell
npm i react-router-dom
```

```jsx
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <h1>React Workshop</h1>
      <Route path="/movies/:id">
        <Details />
      </Route>
      <Route path="/">
        <Search />

        {categories.map((category) => (
          <Category
            key={category.title}
            title={category.title}
            fetchUrl={category.fetchUrl}
          />
        ))}
      </Route>
    </Router>
  );
};
```

```jsx
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
```

```jsx
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  return <h1>{id}</h1>;
};

export default Details;
```