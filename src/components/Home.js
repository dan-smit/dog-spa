import React from 'react';
import mainImage from '../images/cute-dogs.jpg'

const Home = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Welcome to Fur-tastic Grooming Spa</h1>
      <img src={mainImage} alt="Main"
      className="img-fluid" />
      <p className="my-4">Location: 123 Main St, City, State</p>
      <p>Hours: Monday - Friday: 9am - 6pm, Saturday: 10am - 4pm</p>
    </div>
  );
};

export default Home;