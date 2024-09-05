import React from "react";
import PropTypes from "prop-types";

export default function Contact({ address, emails, phones }) {
  return (
    <section id="contact" className="card mb-2">
      <h3>Contactos</h3>
      {address && <div>{address}Av. 60 No. 3104, Cienfuegos</div>}
      {phones &&
        phones.map((phone) => (
          <a key={phone} className="nav-link" href={"tel:" + phone}>
            tel:{phone}
          </a>
        ))}
      {emails &&
        emails.map((email) => (
          <a key={email} className="nav-link" href={"mailto:" + email}>
            email:{email}
          </a>
        ))}
    </section>
  );
}
Contact.propTypes = {
  emails: PropTypes.array.isRequired,
  phones: PropTypes.array.isRequired,
  address: PropTypes.string.isRequired,
};
