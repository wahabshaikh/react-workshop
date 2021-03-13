---
title: Class Components
---

# Class Components

```js
const requests = {
    ...
    fetchDetails: (id) =>
        `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchVideos: (id) =>
        `/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
}
```

```jsx
// src/Details.js

import axios from "./axios";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import requests, { displayImage } from "./requests";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const movieResponse = await axios.get(
      requests.fetchDetails(this.props.match.params.id)
    );
    this.setState(Object.assign({ ...this.state, movie: movieResponse.data }));

    const trailerResponse = await axios.get(
      requests.fetchVideos(this.props.match.params.id)
    );
    this.setState({
      ...this.state,
      loading: false,
      trailer: trailerResponse.data.results[0],
    });
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const {
      title,
      name,
      homepage,
      genres,
      overview,
      release_date,
      runtime,
      backdrop_path,
    } = this.state.movie;
    const { key } = this.state.trailer;

    return (
      <section>
        <div style={{ display: "flex" }}>
          <div style={{ maxWidth: "50vw" }}>
            <h2>
              <a href={homepage}>{title || name}</a>
            </h2>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p>{overview}</p>
            <div>Released: {release_date}</div>
            <div>Runtime: {runtime}</div>
          </div>
          <div style={{ maxWidth: "50vw" }}>
            <img
              style={{ width: "100%" }}
              src={displayImage(backdrop_path)}
              alt={title || name}
            />
          </div>
        </div>
        <iframe
          style={{ maxWidth: "100vw", maxHeight: "100vw" }}
          title={this.state.trailer.name}
          src={`https://www.youtube.com/embed/${key}`}
        ></iframe>
      </section>
    );
  }
}

export default withRouter(Details);
```