import React from "react";
import "./Hero.css";
import crypto from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Invest in Cryptocurreny with Your IRA
          </h1>
          <p className="mb-8 leading-relaxed">
            Buy, Sell, and store hundreds of cryptocurrencies
          </p>
          <div className="divhero flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <input
                type="email"
                id="hero-field"
                name="hero-field"
                placeholder="Enter your email"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="learn inline-flex text-center text-white bg-indigo-500 border-0 py-1 focus:outline-none hover:bg-indigo-600 rounded text-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="right lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={crypto}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
