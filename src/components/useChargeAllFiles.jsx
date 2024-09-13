import React from "react";

const images = import.meta.glob("/src/assets/aa/*.{png,jpg,jpeg,svg}");
console.log(images);
const ImageGallery = () => {
  return (
    <div>
      --------
      {Object.keys(images).map((src) => (
        <img key={src} src={src} />
      ))}
      ------------
    </div>
  );
};

export default ImageGallery;
