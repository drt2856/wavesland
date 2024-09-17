import React from "react";
import PropTypes from "prop-types";
const radius = 15;

export default function Plans({ plans }) {
  return (
    <section id="planes" className="card">
      <div className="row d-flex justify-content-evenly">
        {plans.map((plan) => (
          <div
            style={{ borderRadius: radius }}
            key={plan.name}
            className={`col-sm-${
              plan.active ? 4 : 3
            } border border-primary  m-1 px-0 col-12`}
          >
            <header
              className={`h3 py-5 fw-bolder text-center  ${
                plan.active ? "bg-primary text-white " : "text-primary border "
              }`}
              style={{
                minHeight: 100,
                borderTopLeftRadius: radius,
                borderTopRightRadius: radius,
              }}
            >
              {plan.name}
            </header>
            <div className="px-3">
              <div className="fw-bolder fs-5 mb-2">{plan.price}</div>
              <p>{plan.slogan}</p>

              {plan.characteristics && (
                <ul className="ps-0">
                  {plan.characteristics.map((characteristic) => (
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

Plans.propTypes = {
  plans: PropTypes.array.isRequired,
};
