import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/movieSlice";

const useMovieTrailer = (movieId) => {
  console.log(movieId);
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json.results?.filter(
      (video) => video.name === "Official Trailer"
    );
    const trailerBackup = trailer?.length ? trailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailerBackup));
  };

  useEffect(() => {
    if (movieId) {
      getMovieTrailer();
    }
  }, []);
};

export default useMovieTrailer;
