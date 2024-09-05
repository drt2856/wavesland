import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function FlexGalery({ title, images }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <ul className="flex-galery">
        {images &&
          images.map((image) => (
            <li key={image.alt} className="m-1 " width={"100%"}>
              <img src={image.src} alt={image.alt} />
            </li>
          ))}
      </ul>
    </section>
  );
}
FlexGalery.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
