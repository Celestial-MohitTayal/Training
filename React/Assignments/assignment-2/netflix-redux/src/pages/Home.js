import Banner from "../components/Banner";
import Header from "../components/Header";
import MovieRow from "../components/MovieRow";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const Home = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <Banner />
      <MovieRow />
    </div>
  );
};

export default Home;
