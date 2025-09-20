import React from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
  "/images/image11.jpg",
  "/images/image12.jpg",
  "/images/image13.jpg",
  "/images/image14.jpg",
  "/images/image15.jpg",
  "/images/image16.jpg",
  "/images/image17.jpg",
  "/images/image18.jpg",
  "/images/image19.jpg",
  "/images/image20.jpg",
  "/images/image21.jpg",
  "/images/image22.jpg",
  "/images/image22.avif",
  "/images/image23.jpg",
  "/images/image24.avif",
  "/images/image25.webp",
  "/images/image26.jpg",
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
              alt={`image ${idx + 1}`}
              className="object-contain w-full h-full p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
