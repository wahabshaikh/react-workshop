const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchNowPlaying: `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
};

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
export const displayImage = (path) => `${imageBaseUrl}${path}`;

export default requests;
