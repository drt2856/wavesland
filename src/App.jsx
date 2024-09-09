import "./App.css";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Reserves from "./components/reserves/Reserves";
import FlexGalery from "./components/flex_galery/FlexGalery";
import Contact from "./components/contact/Contact";
import Qr from "./components/qr/Qr";
import FeaturedProducts from "./components/featured _products/FeaturedProducts";
import Localitation from "./components/localitation/Localitation";
import Slice from "./components/slice/Slice";
import Table from "./components/table/Table";
import { about, galery, header, hero, menu, table } from "./utils/var";

function App() {
  return (
    <>
      <Header title={header.title} sections={header.sections} />

      <Hero
        title={hero.title}
        subTitle={hero.subTitle}
        textButton={hero.textButton}
      />

      <main className="row center" style={{ backgroundColor: "#eee" }}>
        <div className="col-12 col-sm-8 pt-3 ">
          <About image={about.image} title={about.title} text={about.text} />

          <Menu title={menu.title} items={menu.menu} />

          <FeaturedProducts />

          <FlexGalery title={galery.title} images={galery.images} />

          <Slice />
          <Table
            title={table.title}
            headers={table.headers}
            data={table.data}
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
