import React from "react";

const images = [
  "/images/work1.avif",
  "/images/work2.jpg",
  "/images/work3.avif",
  "/images/work4.webp",
  "/images/work5.jpg",
  "/images/work6.jpg",
  // Add more image paths as needed
];

function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Our Work Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="rounded shadow-md bg-white flex items-center justify-center 
                     h-56 transition duration-300 hover:bg-blue-50 hover:shadow-lg
                      border border-gray-200 hover:border-blue-300"
          >
            <img
              src={src}
              alt={`Work ${idx + 1}`}
              className="object-contain w-full h-full p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
