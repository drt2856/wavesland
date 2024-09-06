import React from "react";
import PropTypes from "prop-types";
const radius = 15;
const plans = [
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

export default function FeaturedProducts({ products = plans }) {
  return (
    <section className="card">
      <div className="row d-flex justify-content-evenly">
        {products.map((product) => (
          <div
            style={{ borderRadius: radius }}
            key={product.name}
            className={`col-${
              product.active ? 4 : 3
            } border border-primary  m-1 px-0`}
          >
            <header
              className={`h3 py-5 fw-bolder text-center  ${
                product.active
                  ? "bg-primary text-white "
                  : "text-primary border "
              }`}
              style={{
                minHeight: 100,
                borderTopLeftRadius: radius,
                borderTopRightRadius: radius,
              }}
            >
              {product.name}
            </header>
            <div className="px-3">
              <div className="fw-bolder fs-5 mb-2">{product.price}</div>
              <p>{product.slogan}</p>

              {product.characteristics && (
                <ul className="ps-0">
                  {product.characteristics.map((characteristic) => (
                    <li key={characteristic}>
                      <i className="fas fa-check text-success me-1" />
                      {characteristic}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

FeaturedProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
