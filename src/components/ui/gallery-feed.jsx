import React from "react";

const GalleryFeed = ({ images }) => {
  return (
    <div className="w-full px-4">
      {/* Masonry wrapper */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {images.map((url, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              src={url}
              alt="aura-img"
              className="w-full rounded-2xl shadow-md hover:opacity-90 transition duration-300"
              //   className="w-full rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryFeed;
