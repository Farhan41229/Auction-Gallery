import React from 'react';
import BannerImg from '../../assets/Banner-min.jpg';

const Banner = () => {
  return (
    <div className=" min-h-screen relative overflow-hidden">
      {/* Flipped background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      ></div>

      {/* Dark overlay */}
      <div className="hero-overlay z-10"></div>

      {/* Text content stays normal */}
      <div className="text-white z-20 relative top-56 left-36">
        <div className="max-w-[600px]">
          <h1 className="mb-5 text-5xl font-bold">
            Bid on Unique Items from Around the World
          </h1>
          <p className="mb-5 text-2xl font-light">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <button className="btn px-4 py-8 w-[238px] h-[57px] text-xl font-medium rounded-full">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
