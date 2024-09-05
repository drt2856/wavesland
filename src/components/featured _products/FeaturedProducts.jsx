import React from "react";
import PropTypes from "prop-types";

export default function FeaturedProducts({ products = [1, 2, 3] }) {
  return (
    <section className="card row">
      {products &&
        products.map((product) => (
          <div key={product.name} className=" col-1">
            <div className="card col-1">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
FeaturedProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
