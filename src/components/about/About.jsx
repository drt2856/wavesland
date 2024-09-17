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
        {title && <h5 className="card-title text-center h1">{title}</h5>}

        <p className="card-text m-5">{text}</p>
      </div>
    </section>
  );
}

About.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
};
