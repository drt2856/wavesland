import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header title="WavesLand" sections={["Menú", "Reservas", "Contacto"]} />

      <Hero
        title={"¡Bienvenidos a la auténtica comida cubana!"}
        subTitle={"Disfruta de los sabores de Cuba en cada bocado."}
        textButton={{ text: "Reserva tu mesa", section: "reservas" }}
      />

      <section id="menú">
        <h2>Nuestro Menú</h2>
        <div className="dish">
          <h3>Ropa Vieja</h3>
          <p>Carne deshebrada en salsa de tomate con especias cubanas.</p>
        </div>
        <div className="dish">
          <h3>Arroz con Pollo</h3>
          <p>Arroz amarillo con pollo, guisantes y pimientos.</p>
        </div>
        <div className="dish">
          <h3>Tostones</h3>
          <p>Plátanos fritos, crujientes y deliciosos.</p>
        </div>
      </section>

      <section id="reservas">
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

      <footer id="contacto">
        <h2>Contacto</h2>
        <p>Email: info@restaurantecubano.com</p>
        <p>Teléfono: +123 456 7890</p>
        <p>Dirección: Calle de la Comida Cubana, Habana, Cuba</p>
      </footer>
    </>
  );
}

export default App;
