import React, { useState } from "react";
import { send } from "emailjs-com";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    to_name: "Daniel",
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    plan: "",
    businessName: "",
    businessDesciption: "",
    businessDirection: "",
    businessPhone: "",
    businessEmail: "",
    colors: [],
    haveLogo: false,
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <section id="contacto" className="card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="yourName">Tu nombre:</label>
        <input
          type="text"
          id="yourName"
          value={formData.yourName}
          onChange={handleChange}
          required
        />

        <label htmlFor="yourEmail">Tu correo:</label>
        <input
          type="email"
          id="yourEmail"
          value={formData.yourEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="yourPhone">Tu teléfono:</label>
        <input
          type="tel"
          id="yourPhone"
          value={formData.yourPhone}
          onChange={handleChange}
        />

        <label htmlFor="yourPhone">Plan seleccionado</label>
        <select
          style={{ padding: 15 }}
          id="plan"
          value={formData.plan}
          onChange={handleChange}
          required
        >
          <option value="Básico">Básico</option>
          <option value="Estandar">Estandar</option>
          <option value="Profecional">Profecional</option>
        </select>

        <label htmlFor="businessName">Nombre del negocio:</label>
        <input
          type="text"
          id="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
        />

        <label htmlFor="businessDescription">
          Breve descripción del negocio
        </label>
        <textarea
          style={{ minHeight: 150 }}
          type="text"
          id="businessDescription"
          value={formData.businessDescription}
          onChange={handleChange}
          required
        />

        <label htmlFor="businessDirection">
          Dirección física del negocio (si tiene):
        </label>
        <input
          type="text"
          id="businessDirection"
          value={formData.businessDirection}
          onChange={handleChange}
        />

        <label htmlFor="yourName">Tu nombre:</label>
        <input
          type="color"
          id="yourName"
          value={formData.yourName}
          onChange={handleChange}
          required
        />

        <label htmlFor="yourName">Tu nombre:</label>
        <input
          type="text"
          id="yourName"
          value={formData.yourName}
          onChange={handleChange}
          required
        />

        <label htmlFor="yourName">Tu nombre:</label>
        <input
          type="text"
          id="yourName"
          value={formData.yourName}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}
