import Banner from "./Banner";
import Search from "./Search";
import requests from "./requests";

const App = () => {
  return (
    <div>
      <h1>React Workshop</h1>
      <Search />

      <Banner fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
