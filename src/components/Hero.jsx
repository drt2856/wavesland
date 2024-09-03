import React from "react";
import PropTypes from "prop-types";
export default function Hero({ title, subTitle, textButton }) {
  return (
    <section id="hero">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <br />
      <a href={"#" + textButton.section} className="btn">
        {textButton.text}
      </a>
    </section>
  );
}

Hero.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textButton: PropTypes.object.isRequired,
};
