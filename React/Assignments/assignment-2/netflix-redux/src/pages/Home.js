import React from 'react'
import  { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { removeUser } from '../redux/userSlice';
// import store from '../redux/store';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  // const dispatch = useDispatch();
  // const userName = useSelector(store => store.user.name)
  // const navigate = useNavigate()
  const [videos, setVideos] = useState([]);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchPopularVideos = async () => {
    try {
      const API_KEY = 'AIzaSyAdLtOa8NVgvAF5d9M3nhobyhCv36hkhMk';  
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet,statistics', 
          chart: 'mostPopular',       
          regionCode: 'US',           
          maxResults: 16,             
          key: API_KEY,               
        },
      });

      setVideos(response.data.items); 
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch videos'); 
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
    // <div>
    //   Home
    //   <h1>{userName}</h1>
    //   <button onClick={() => {dispatch(removeUser()); navigate('/') } }>signout</button>

      <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Popular YouTube Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{video.snippet.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{video.snippet.description}</p>
              <p className="text-xs text-gray-500 mt-2">Views: {video.statistics.viewCount}</p>
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
    
  );
}

export default Home;