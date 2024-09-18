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
import icon from "../assets/icon.png";
import shortid from "shortid";

export const header = {
  title: "WavesLand",
  logo: icon,
  sections: [
    "Sombre nosotros",
    "Planes",
    "Preguntas frecuentes",
    "Contacto",
    "",
  ],
};

export const about = {
  title: "Se bien venido a wavesland",
  text: "WavesLand es una empresa dedicada a la creación de sitios web profesionales, ofreciendo soluciones accesibles y personalizadas para todo tipo de negocios, desde pequeños emprendimientos hasta grandes empresas. Con un enfoque en la calidad y la facilidad de uso, WavesLand se posiciona como la mejor opción para aquellos que buscan una presencia en línea efectiva y atractiva, adaptándose a las necesidades específicas de cada cliente para asegurar su éxito en el mundo digital.",
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
  textButton: { text: "Contactanos", section: "contacto" },
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
  phones: ["+53 56605908"],
  address: "calle #24 Cabañas, Mariel, Artemisa",
  emails: ["drt2856@gmail.com"],
};

export const location = {
  title: "Localización",
  subtitle: "Donde te creías si no",
  src: "https://www.google.com/maps/d/embed?mid=1EyCYuRAA2aKhz9zCf4rkebl-iAs&ehbc=2E312F",
};

export const qr = {
  title: "Escanee aquí para obtener la direccion del sitio web y compartirla ",
  value: "https://drt2856.github.io/wavesland/",
};

export const carousel = {
  images: [n404, n404, n404],
};

export const accordion = {
  title: "Preguntas frecuentes",
  items: [
    {
      id: shortid.generate(),
      title: "¿Qué servicios ofrece WavesLand?",
      text: "WavesLand se especializa en la creación de sitios web profesionales, ofreciendo soluciones personalizadas para negocios de todos los tamaños.",
    },
    {
      id: shortid.generate(),
      title: "¿Que obtiene la persona o negocio que adquiere un plan?",
      text: "Varia de acuerdo al plan seleccionado pero, todos obitienen un sitio web personalizado con domio web gratis de por vida(A menos que las politicas de uso de wavesland cambie y en tal caso se les notificara a las personas que tengan su plan activo),  ",
    },
    {
      id: shortid.generate(),
      title: "¿Cómo puedo contactar a WavesLand? ",
      text: "Puedes contactarnos a través de correo electrónico en info@restaurantecubano.com o llamando al +123 456 7890.",
    },
    {
      id: shortid.generate(),
      title: "¿Dónde está ubicada WavesLand?",
      text: "Somos un negocio totalmente digital por lo cual no poseemos dirección física",
    },
    {
      id: shortid.generate(),
      title:
        "¿Qué tipo de negocios pueden beneficiarse de los servicios de WavesLand?",
      text: "Nuestros servicios están diseñados para beneficiar tanto a pequeños emprendimientos como a grandes empresas, proporcionando soluciones efectivas y atractivas para todos.",
    },
    {
      id: shortid.generate(),
      title: "¿Qué hace que WavesLand sea la mejor opción para mi negocio?",
      text: "WavesLand se destaca por ofrecer servicios de alta calidad y accesibles, adaptándose a las necesidades específicas de cada cliente para asegurar su éxito en el mundo digital.",
    },
    {
      id: shortid.generate(),
      title: "¿Cuales son los módulos que puede tener una página?",
      text: "Puede tener: Encabezado, módulo Sobre el negocio, módulo de galería de imágenes, módulo de presentación de productos, módulo de planes de servicios, módulo de preguntas frecuentes, módulo de slice de imagenes, módulo de localización por mapa, módulo de contactos, módulo de escaneo de Qr, módulo de tabla personalizada, y módulo de formulario por email",
    },
    {
      id: shortid.generate(),
      title: "¿Puedo cambiar de plan despues de haber seleccionado otro?",
      text: "Si, solo necesita ponerse en contacto con wavesland",
    },
    {
      id: shortid.generate(),
      title:
        "¿Puedo pedir un servicio aun mas personalizado que no se encuetre dentro de los planes?",
      text: "Si, simplemente pongase en contato y ambas partes llegaran a un acuerdo por el nuevo servicio presentado",
    },
    {
      id: shortid.generate(),
      title:
        "¿Un cambio de plan podría agregar mayor precio al monto final del servicio adqurido?",
      text: "Solo si se pasa de un proyecto de menora precio a uno de mayor, o si se efectua el cambio de plan despues de entregar el producto final",
    },
  ],
};

export const plans = [
  {
    name: "Básico",
    slogan: "Ideal para negocios pequeños",
    price: "10 000 CUP",
    characteristics: [
      "Estilo de columna",
      "Hasta 3 módulos extra",
      "Elección de estilos y colores base",
    ],
  },
  {
    name: "Profesional",
    slogan: "Ideal para negocios pequeños",
    price: "15 000 CUP",
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
    price: "12 000 CUP",
    characteristics: [
      "Estilo de 2 columnas",
      "Hasta 5 módulos extra",
      "Elección de estilos y colores base",
    ],
  },
];
