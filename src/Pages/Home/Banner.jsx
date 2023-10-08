import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[500px] md:h-[700px] rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Premier <br /> <span className="text-red-400">
            Event Planning</span> <br /> Partner
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Plan and organize unforgettable events with ease. Our expert team is
            here to make your vision a reality. Whether it's a wedding, birthday party or any special occasion, we've got you covered.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
