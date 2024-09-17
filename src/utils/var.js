import n404 from "../assets/404.jpg";
//import from gallery
import g1 from "../assets/gallery/1.jpg";
import g2 from "../assets/gallery/2.jpg";
import g3 from "../assets/gallery/3.jpg";
import g4 from "../assets/gallery/4.jpg";
import g5 from "../assets/gallery/5.jpg";
import g6 from "../assets/gallery/6.jpg";
import g7 from "../assets/gallery/7.jpg";
import g8 from "../assets/gallery/8.jpg";
import g9 from "../assets/gallery/9.jpg";
import g10 from "../assets/gallery/10.jpg";
import g11 from "../assets/gallery/11.jpg";

export const header = {
  title: "WavesLand",
  sections: ["Sombre nosotros", "Planes", "Contacto", "Otro", "Otro mas"],
};

export const about = {
  image: n404,
  title: "Lo mejore de lo mejor",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quisquam tenetur ex voluptatem quod esse tempore, dignissimos dolore, veniam nemout doloremque. Harum sapiente modi magni officia labore perspiciatiscorporis. Dolorem temporibus recusandae optio placeat eos quam vero exporro incidunt rem debitis perferendis, dignissimos repellendus ipsaquaerat eius, autem voluptatibus veniam, doloremque animi? Fuga voluptatemobcaecati quibusdam nam corporis",
};

export const menu = {
  title: "Jama de hoy",
  folder: "menu",
  menu: [
    {
      title: "Jamón",
      image: "jamon.jpg",
      description: "la mejor carne asada del mundo mi loco",
    },
    {
      title: "Ropa Vieja",
      image: "cervez cristal.jpg",
      description:
        "Carne deshebrada en salsa de tomate con especias cubanas.sd Disfrutas",
    },
  ],
};

export const hero = {
  title: "¡Date a conocer con Wavesland!",
  subTitle: "Obtenga facilmente su web profesional",
  textButton: { text: "Contactanos", section: "Contacto" },
};

export const galery = {
  title: "Galería",
  images: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11],
};

export const table = {
  title: "Todos nuestros productos",
  headers: ["Producto", "Precio"],
  data: [
    { nombre: "Aguacate", precio: "1.20" },
    { nombre: "Aguacate", precio: "1.20" },
    { nombre: "Aguacate", precio: "1.20" },
  ],
};

export const contact = {
  phones: ["+53 56605908", "+53 56605918"],
  address: "calle #24 Cabañas, Mariel, Artemisa",
  emails: ["drt2856@gmail.com"],
};

export const location = {
  title: "Localización",
  subtitle: "Donde te creías si no",
  src: "https://www.google.com/maps/d/embed?mid=1EyCYuRAA2aKhz9zCf4rkebl-iAs&ehbc=2E312F",
};

export const qr = {
  title: "Escanee aqui",
  value: "Te aconsejo poner tiu direccion web aqui",
};

export const carousel = {
  images: [n404, n404, n404],
};

export const accordion = {
  items: [
    {
      title: "Pregunta",
      text: "Respuesta",
    },
    {
      title: "Preguntad",
      text: "Respuestaf",
    },
    {
      title: "Preguntads",
      text: "Respuestasf",
    },
  ],
};

export const plans = [
  {
    name: "Básico",
    slogan: "Ideal para negocios pequeños",
    price: "1000 CUP",
    characteristics: [
      "Estilo de columna",
      "Hasta 3 módulos extra",
      "Elección de estilos y colores base",
    ],
  },
  {
    name: "Profesional",
    slogan: "Ideal para negocios pequeños",
    price: "1500 CUP",
    active: true,
    characteristics: [
      "Estilo de 2 columnas",
      "Todos los módulos disponibles",
      "Elección de estilos y colores base",
      "Gestionar productos en tiempo real",
      "Modulo especial de Reservas por correo",
      "Formulario personalizable",
    ],
  },
  {
    name: "Estandar",
    slogan: "El más popular",
    price: "1200 CUP",
    characteristics: [
      "Estilo de 2 columnas",
      "Hasta 5 módulos extra",
      "Elección de estilos y colores base",
    ],
  },
];
