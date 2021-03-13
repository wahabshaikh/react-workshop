import Banner from "./Banner";
import Category from "./Category";
import Search from "./Search";
import requests from "./requests";

const categories = [
  { title: "Now Playing", fetchUrl: requests.fetchNowPlaying },
  { title: "Popular", fetchUrl: requests.fetchPopular },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Upcoming", fetchUrl: requests.fetchUpcoming },
];

const App = () => {
  return (
    <div>
      <h1>React Workshop</h1>
      <Search />

      <Banner fetchUrl={requests.fetchTrending} />
      {categories.map((category) => (
        <Category
          key={category.title}
          title={category.title}
          fetchUrl={category.fetchUrl}
        />
      ))}
    </div>
  );
};

export default App;
