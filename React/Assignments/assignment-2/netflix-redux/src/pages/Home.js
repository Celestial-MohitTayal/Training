import { useState, useEffect } from "react";
import axios from "axios";
import bannerImage from "../assets/background_banner.jpg";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const status = localStorage.getItem("status");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status == "notLogin") {
      navigate("/");
    }
    console.log(status);
  }, []);

  const fetchPopularVideos = async () => {
    try {
      const API_KEY = "AIzaSyAdLtOa8NVgvAF5d9M3nhobyhCv36hkhMk";
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,statistics",
            chart: "mostPopular",
            regionCode: "IN",
            maxResults: 16,
            key: API_KEY,
          },
        }
      );

      setVideos(response.data.items);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch videos");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  if (loading) {
    return <div>Loading popular videos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-black">
        <img
          className="object-cover w-full h-full absolute inset-0"
          src={bannerImage}
          alt="Banner"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-20 left-6 sm:left-12 md:left-16 lg:left-20 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {videos[0].snippet.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg w-3/4 lg:w-1/2 mb-6">
            {videos[0].snippet.title}
          </p>
          <div className="flex gap-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
              Play
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300">
              My List
            </button>
          </div>
        </div>
      </div>

      <div className="relative max-w-lg mx-auto mt-8 mb-4">
        <input
          type="text"
          placeholder="Search for videos..."
          className="w-full py-2 px-4 text-xl rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Popular YouTube Videos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {video.snippet.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {video.snippet.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Views: {video.statistics.viewCount}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold"
                >
                  Watch Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
