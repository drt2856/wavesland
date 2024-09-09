import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./style.css";
export default function Slice({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="card">
      <div
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="carousel-image"
        />
        <button className="carousel-button prev" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="carousel-button next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </section>
  );
}
Slice.propTypes = {
  images: PropTypes.string.isRequired,
};
