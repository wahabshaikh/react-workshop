const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchQuery: (query) =>
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}`,
};

export const posterBaseUrl = "https://image.tmdb.org/t/p/original/";
export default requests;
