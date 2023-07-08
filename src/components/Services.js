import React from 'react';
import serviceData from '../data/serviceData.json';

const Services = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="row">
        {serviceData.map((service) => (
          <div className="col-12 col-md-6 mb-4" key={service.id}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="card-text">{service.description}</p>
                <p className="card-text">Price: {service.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Services;