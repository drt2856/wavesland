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
import {
  about,
  accordion,
  carousel,
  contact,
  galery,
  header,
  hero,
  location,
  menu,
  qr,
  table,
} from "./utils/var";
import Accordion from "./components/accordion/Accordion";
import EmailForm from "./components/email_form/EmailForm";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header title={header.title} sections={header.sections} />

      <Hero
        title={hero.title}
        subTitle={hero.subTitle}
        textButton={hero.textButton}
      />

      <div className="row center" style={{ backgroundColor: "#eee" }}>
        <main className="col-12 col-sm-8 pt-3 ">
          <About image={about.image} title={about.title} text={about.text} />

          <Menu title={menu.title} items={menu.menu} folder={menu.folder} />

          <FeaturedProducts />

          <FlexGalery title={galery.title} folder="gallery" />

          <Slice folder="gallery" />
          <Table
            title={table.title}
            headers={table.headers}
            data={table.data}
          />
          <Accordion items={accordion.items} />

          <Reserves />
          <EmailForm />
        </main>

        <aside className="col-12 col-sm-3 pt-3">
          <Contact
            phones={contact.phones}
            address={contact.address}
            emails={contact.emails}
          />
          <Localitation
            title={location.title}
            subtitle={location.subtitle}
            src={location.src}
          />
          <Qr title={qr.title} value={qr.value} />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default App;
