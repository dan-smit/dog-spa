import React from 'react';
import mainImage from '../images/cute-dogs.jpg'

const Home = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Welcome to Fur-tastic Grooming Spa</h1>
      <img src={mainImage} alt="Main"
      className="img-fluid" />
    </div>
  );
};

export default Home;