import "./App.css";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Reserves from "./components/reserves/Reserves";
import n404 from "./assets/404.jpg";
import FlexGalery from "./components/flex_galery/FlexGalery";
import Contact from "./components/contact/Contact";
import Qr from "./components/qr/Qr";
import FeaturedProducts from "./components/featured _products/FeaturedProducts";
import Localitation from "./components/localitation/Localitation";
import Slice from "./components/slice/Slice";
import Table from "./components/table/Table";
const reservas = [
  {
    title: "Carne asada",
    image: "fdsfsd",
    description: "la mejor carne asada del mundo mi loco",
  },
  {
    title: "Ropa Vieja",
    description:
      "Carne deshebrada en salsa de tomate con especias cubanas.sd Disfrutas",
  },
  {
    title: "Carne asada",
    image: "fdsfsd",
    description: "la mejor carne asada del mundo mi loco",
  },
  {
    title: "Carne asada",
    image: "fdsfsd",
    description: "la mejor carne asada del mundo mi loco",
  },
];

function App() {
  return (
    <>
      <Header
        title="WavesLand"
        sections={["Menú", "Reservas", "Contacto", "Otro", "Otro mas"]}
      />

      <Hero
        title={"¡Bienvenidos a la auténtica comida cubana!"}
        subTitle={"Disfruta de los sabores de Cuba en cada bocado."}
        textButton={{ text: "Reserva tu mesa", section: "reservas" }}
      />

      <main className="row center" style={{ backgroundColor: "#eee" }}>
        <div className="col-12 col-sm-8 pt-3 ">
          <About
            image={n404}
            title={"Lo mejore de lo mejor"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quisquam tenetur ex voluptatem quod esse tempore, dignissimos dolore, veniam nemout doloremque. Harum sapiente modi magni officia labore perspiciatiscorporis. Dolorem temporibus recusandae optio placeat eos quam vero exporro incidunt rem debitis perferendis, dignissimos repellendus ipsaquaerat eius, autem voluptatibus veniam, doloremque animi? Fuga voluptatemobcaecati quibusdam nam corporis"
            }
          />
          <Menu title="Jama de hoy" items={reservas} />
          <FeaturedProducts />
          <FlexGalery
            title="Galería"
            images={[
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
              { src: n404, alt: "1" },
            ]}
          />
          <Slice />
          <Table
            title={"Todos nuestros productos"}
            headers={["Producto", "Precio"]}
            data={[
              { nombre: "Aguacate", precio: "1.20" },
              { nombre: "Aguacate", precio: "1.20" },
              { nombre: "Aguacate", precio: "1.20" },
            ]}
          />

          <Reserves />
        </div>

        <div className="col-12 col-sm-3 pt-3">
          <Contact
            phones={["+53 56605908", "+53 56605908"]}
            address="calle #24 Cabañas, Mariel, Artemisa"
            emails={["drt2856@gmail.com"]}
          />
          <Localitation
            title="Localización"
            subtitle={"Donde te creías si no"}
            src="https://www.google.com/maps/d/embed?mid=1EyCYuRAA2aKhz9zCf4rkebl-iAs&ehbc=2E312F"
          />
          <Qr
            title={"Escanee aqui"}
            value={"Te aconsejo poner tiu direccion web aqui"}
          />
        </div>
      </main>
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
