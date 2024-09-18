import PropTypes from "prop-types";
import React from "react";
import "./style.css";

function Header({ title, sections, logo }) {
  return (
    <header className="header">
      <div className="d-flex align-item-center">
        {logo && (
          <img
            style={{ width: 100, margin: "0 auto" }}
            src={logo}
            alt="carousel"
            className="carousel-image"
          />
        )}
        <h1 className="d-flex align-items-center">{title}</h1>
      </div>

      <nav className="my-nav">
        <ul>
          {sections &&
            sections.map((section) => (
              <li key={section}>
                <a href={"#" + section.toLowerCase()}>{section}</a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  sections: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
