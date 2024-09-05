import React from "react";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";

export default function Qr({ title, value }) {
  return (
    <section className="card">
      {title && <h3>{title}</h3>}
      <QRCode value={value} size={"100%"} title="My QR Code" />
    </section>
  );
}
Qr.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};
