import React from "react";
import PropTypes from "prop-types";

export default function Accordion({ items }) {
  return (
    <section className="accordion card" id="accordion">
      {items.map((item) => (
        <div key={item.title} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#" + item.title}
              aria-controls={item.title}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={item.title}
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
  items: PropTypes.array.isRequired,
};
