import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl border-b border-slate-700/50">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-6 py-4">
        <div className="font-bold text-lg sm:text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
          RAHUL ENTERPRISES
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-8 absolute md:static bg-gradient-to-b md:bg-none from-slate-900 to-slate-800 w-full left-0 top-[72px] md:w-auto md:bg-transparent shadow-2xl md:shadow-none ${
            open ? "flex" : "hidden md:flex"
          } z-50 border-t border-slate-700/50 md:border-0`}
        >
          <a
            href="/"
            className="px-6 py-4 md:p-3 font-medium text-slate-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:bg-slate-800/30 md:hover:bg-transparent rounded-lg md:rounded-none relative group"
            onClick={() => setOpen(false)}
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300 hidden md:block"></span>
          </a>

          <a
            href="/gallery"
            className="px-6 py-4 md:p-3 font-medium text-slate-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:bg-slate-800/30 md:hover:bg-transparent rounded-lg md:rounded-none relative group"
            onClick={() => setOpen(false)}
          >
            Gallery
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300 hidden md:block"></span>
          </a>

          <a
            href="/order"
            className="px-6 py-4 md:p-3 font-medium text-slate-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:bg-slate-800/30 md:hover:bg-transparent rounded-lg md:rounded-none relative group"
            onClick={() => setOpen(false)}
          >
            Order
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300 hidden md:block"></span>
          </a>

          <a
            href="/about"
            className="px-6 py-4 md:p-3 font-medium text-slate-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:bg-slate-800/30 md:hover:bg-transparent rounded-lg md:rounded-none relative group"
            onClick={() => setOpen(false)}
          >
            About
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300 hidden md:block"></span>
          </a>

          <a
            href="/contact"
            className="px-6 py-4 md:p-3 font-medium text-slate-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:bg-slate-800/30 md:hover:bg-transparent rounded-lg md:rounded-none relative group"
            onClick={() => setOpen(false)}
          >
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300 hidden md:block"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
