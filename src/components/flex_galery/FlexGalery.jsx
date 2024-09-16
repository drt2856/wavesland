import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { useGetAllImagesFromFolder } from "../../hooks/useGetAllImagesFromFolder";

export default function FlexGalery({ title, folder, dimentions }) {
  const images = useGetAllImagesFromFolder(folder);
  return (
    <section className="card">
      <h2>{title}</h2>
      <ul className="flex-galery">
        {images &&
          images.map((image) => (
            <li key={image} className="m-1 " width={"100%"}>
              <img
                src={image}
                alt={"image from gallery"}
                style={{
                  width: dimentions?.width && dimentions.width,
                  height: dimentions?.height && dimentions.height,
                }}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}
FlexGalery.propTypes = {
  folder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dimentions: PropTypes.object,
};
