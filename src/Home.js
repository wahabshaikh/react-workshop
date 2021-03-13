import Banner from "./Banner";
import Category from "./Category";
import requests from "./requests";

const categories = [
  { title: "Now Playing", fetchUrl: requests.fetchNowPlaying },
  { title: "Popular", fetchUrl: requests.fetchPopular },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Upcoming", fetchUrl: requests.fetchUpcoming },
];

const Home = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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

export default Home;
