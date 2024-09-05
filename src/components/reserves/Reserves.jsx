import React from "react";
import "./style.css";

export default function Reserves() {
  return (
    <section id="reservas" className="card ">
      <h2>Haz tu Reserva</h2>
      <form action="#" method="post">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="fecha">Fecha:</label>
        <input type="date" id="fecha" name="fecha" required />

        <label htmlFor="hora">Hora:</label>
        <input type="time" id="hora" name="hora" required />

        <label htmlFor="personas">Número de Personas:</label>
        <input type="number" id="personas" name="personas" required />

        <button type="submit">Reservar</button>
      </form>
    </section>
  );
}
