import React from "react";
import banner from "../assets/banner1.jpg";
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <div className="bg-gray-100  py-14  md:py-24">
      <div
        className="relative max-w-5xl md:mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[500px] md:h-[520px]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              {" "}
              Next-Gen Electronics at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the latest tech innovation with unbeatable prices and
              free shipping on all orders.
            </p>
            <Link to="/products">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-5 md:py-3 md:px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
