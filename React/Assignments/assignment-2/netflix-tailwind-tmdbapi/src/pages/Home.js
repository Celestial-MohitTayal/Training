import Banner from "../components/Banner";
import Header from "../components/Header";
import MovieContainer from "../components/MovieContainer";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";


const Home = () => {
  useMovieTrailer();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      <Banner />
      <MovieContainer />
    </div>
  );
};

export default Home;
