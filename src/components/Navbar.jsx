import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-6 py-3">
        <Link to="/" className="font-bold text-lg sm:text-xl">
          RAHUL ENTERPRISES
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {/* Simple hamburger */}
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 absolute md:static bg-blue-800 w-full left-0 top-16 md:w-auto md:bg-transparent ${open ? 'flex' : 'hidden md:flex'} z-50`}>
          <Link to="/" className="p-3 hover:text-yellow-400" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/gallery" className="p-3 hover:text-yellow-400" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/order" className="p-3 hover:text-yellow-400" onClick={() => setOpen(false)}>Order</Link>
          <Link to="/about" className="p-3 hover:text-yellow-400" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" className="p-3 hover:text-yellow-400" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
