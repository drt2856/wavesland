import React from "react";
import PropTypes from "prop-types";

export default function Accordion({ title, items }) {
  return (
    <section className="accordion card" id="preguntas frecuentes">
      <h2>{title}</h2>
      {items.map((item) => (
        <div key={item.title} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#" + item.id}
              aria-controls={item.title.id}
              aria-expanded="false"
            >
              {item.title}
            </button>
          </h2>
          <div
            id={item.id}
            className="accordion-collapse collapse "
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">{item.text}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
