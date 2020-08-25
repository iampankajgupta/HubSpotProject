import React from "react";

const Services = ({ services, title }) => {
  return (
    <>
      <div className="services" style={{"margin":"10px 20px","padding":"30px"}}>
        <div>
          <h5 style={{"margin":"0px 8px",}}>{title}</h5>
        </div>
        <div>
          <ul>
            {services.map((service) => (
              <li key={service} id="service" style={{"margin":"22px","fontFamily":"sans-serif"}}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
