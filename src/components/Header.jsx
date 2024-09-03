import PropTypes from "prop-types";
import React from "react";

function Header({ title, sections }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
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
