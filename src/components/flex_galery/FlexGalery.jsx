import React from "react";
import PropTypes from "prop-types";
import "./style.css";
export default function FlexGalery({ title, images, dimensions }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <ul className="flex-galery">
        {images &&
          images.map((image, index) => (
            <li key={index} className="m-1">
              <img
                src={image}
                style={{
                  width: dimensions?.width || 300,
                  height: dimensions?.height || "auto",
                }}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}

FlexGalery.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  dimensions: PropTypes.object,
};
