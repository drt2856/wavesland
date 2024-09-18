import React from "react";
import PropTypes from "prop-types";

export default function About({ image, title, text }) {
  return (
    <section className="card">
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ maxHeight: 400 }}
        />
      )}
      <div className="card-body">
        {title && <h2 className="card-title mb-3  h1">{title}</h2>}

        <p className="card-text">{text}</p>
      </div>
    </section>
  );
}

About.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
};
