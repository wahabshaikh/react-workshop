import Category from "./Category";
import Search from "./Search";
import requests from "./requests";

const categories = [
  { title: "Trending", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
];

const App = () => {
  return (
    <div>
      <h1>React Workshop</h1>
      <Search />

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
