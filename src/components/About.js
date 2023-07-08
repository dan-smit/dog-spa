import React from 'react';
import staffData from '../data/staffData.json';
import germanShep from '../images/german-shepherd.jpg'

const About = () => {
  return (
    <div className="container">
      <h1 className="my-4">About Us</h1>
      <p>Meet the owners and our team of expert dog groomers:</p>
      <div className="row">
        {staffData.map((staff) => (
          <div className="col-sm-6" key={staff.id}>
            <div className="card mb-3">
              <img src={germanShep} className="card-img-top" alt={staff.name} />
              <div className="card-body">
                <h3 className="card-title">{staff.name}</h3>
                <p className="card-text">{staff.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;