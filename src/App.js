import Category from "./Category";
import requests from "./requests";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <h1>React Workshop</h1>
      <Search />

      <Category title="Trending" fetchUrl={requests.fetchTrending} />
      <Category title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
};

export default App;
