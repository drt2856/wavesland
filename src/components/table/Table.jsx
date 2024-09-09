import React from "react";
import PropTypes from "prop-types";

export default function Table({ title, subtitle, headers, data }) {
  return (
    <section className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{subtitle}</p>
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => (
            <tr key={dat.id}>
              {Object.values(dat).map((item) => (
                <td key={item}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
Table.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
