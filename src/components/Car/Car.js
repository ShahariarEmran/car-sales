import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css'

const Car = ({car}) => {
    const {_id, name, price, description, img} = car;
    return (
        <div className="car pb-3">
            <img src={img} height="350px" weigh="525px" alt="" />
            <h2>Car Name: {name}</h2>
            <p className="px-3">{description}</p>
            <h4>Car Price: {price}$</h4>
            <Link to={`/purchase/${_id}`}>
            <button className="btn btn-primary">Buy Now Car</button>
            </Link>
        </div>
    );
};

export default Car;