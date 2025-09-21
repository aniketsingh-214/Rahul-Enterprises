import React from "react";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-4 mt-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent tracking-wider drop-shadow-sm">
        RAHUL ENTERPRISES
      </h1>

      <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center font-semibold text-slate-700 leading-relaxed max-w-4xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
        ALL TYPES OF GRAPHICS STICKERS | Water Label Sticker | Vasir Falim |
        Bike Side Box Matching Sticker
      </p>

      <div className="mb-12 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
        <a
          href="/order"
          className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 text-white px-10 py-4 rounded-xl shadow-xl font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 border border-blue-600/20 backdrop-blur-sm flex items-center gap-3 group"
        >
          <span className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
            🛍️
          </span>
          Place an Order
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </a>
      </div>

      <Gallery />
    </div>
  );
}

export default Home;
