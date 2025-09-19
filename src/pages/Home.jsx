import React from 'react';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 mt-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-2 text-center">RAHUL ENTERPRISES</h1>
      <p className="text-xl mb-4 text-center font-semibold">ALL TYPES OF GRAPHICS STICKERS | Water Label Sticker | Wasir Falim | Bike Side Box Matching Sticker</p>
      <p className="mb-4 text-center">Located at Village Bhoodli, Chopanki Road, near Kamdhenu Paint Company, Bhiwadi, Rajasthan - 301019</p>
      <Link
        to="/order"
        className="mb-8 bg-blue-800 text-white px-8 py-3 rounded shadow-lg font-bold text-lg transition hover:bg-blue-900"
      >
        Place an Order
      </Link>
      <Gallery />
    </div>
  );
}

export default Home;
