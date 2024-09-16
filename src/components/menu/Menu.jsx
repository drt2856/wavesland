import React from "react";
import PropTypes from "prop-types";
import imganeg from "../../assets/404.jpg";
import "./style.css";
import { useGetAllImagesFromFolder } from "../../hooks/useGetAllImagesFromFolder";

export default function Menu({ title, items, folder }) {
  const images = useGetAllImagesFromFolder(folder);

  function getImage(image) {
    const src = images.filter((src) => src.includes(image));
    return src;
  }

  return (
    <section id="menú" className="card">
      <h2>{title}</h2>
      <ul className="card-list">
        {items &&
          items.map((item) => (
            <li key={item.title}>
              <div className="card mb-3 mx-auto" style={{ maxWidth: 1000 }}>
                <div className="row g-0">
                  <div className="col-sm-4">
                    <img
                      src={images.length > 0 ? getImage(item.image) : imganeg}
                      alt={item.title}
                      className="card-img-top"
                    />
                  </div>
                  <div className="col-sm-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </li>
          ))}
      </ul>
    </section>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  folder: PropTypes.string,
  items: PropTypes.array.isRequired,
};
