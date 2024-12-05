import React from "react";
import { Link } from "react-router-dom";
import Banner from "../images/jpg/banner2.jpg";

const Home = () => {
  return (
    <div
      className='text-center text-textPrimary min-h-screen flex flex-col justify-center items-center bg-cover bg-center'
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div className='p-6 rounded-lg'>
        <h1 className='text-3xl md:text-4xl text-textLight font-bold mb-4'>
          Welcome to Glowmoree By Hawwa Makeup
        </h1>

        <p className='text-lg text-textLight mb-6 font-bold'>
          Your luxury makeup destination.
        </p>
        <button className='px-6 py-2 bg-accent text-primary font-semibold rounded transform hover:scale-110 transition-transform'>
          <Link to='/new-booking'>Book Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
