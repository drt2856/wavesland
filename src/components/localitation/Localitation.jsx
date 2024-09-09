import React from "react";
import PropTypes from "prop-types";

export default function Localitation({ title, subtitle, src }) {
  return (
    <section id="localitation" className="card">
      <h3>{title}</h3>
      <iframe src={src} className="col-12" height="480"></iframe>
      <p className="pt-1">{subtitle}</p>
    </section>
  );
}
Localitation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string.isRequired,
};
