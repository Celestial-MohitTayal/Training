import React from "react";

const videoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-24 bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg lg:w-1/4 md:w-1/2 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-8 rounded-lg text-lg shadow-lg bg-opacity-100 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg text-lg shadow-lg bg-opacity-80 hover:bg-opacity-100 mx-4">
          ︕ More Info
        </button>
      </div>
    </div>
  );
};

export default videoTitle;
