import Category from "../components/Category";
import Search from "../components/Search";
import requests from "../utils/requests";

const categories = [
  { title: "Trending", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
];

const Home = () => {
  return (
    <div>
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

export default Home;
