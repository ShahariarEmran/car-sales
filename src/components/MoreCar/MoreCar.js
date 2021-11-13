import React from 'react';
import { Link } from 'react-router-dom';

const MoreCar = ({more}) => {
    const {_id, name, price, description, img} = more;
    return (
        <div className="container car pb-3">
            <img src={img} alt="" />
            <h2>Car Name: {name}</h2>
            <p className="px-3">{description}</p>
            <h4>Car Price: {price}&</h4>
            <Link to={`/purchase/${_id}`}>
            <button className="btn btn-primary">Buy Now Car</button>
            </Link>
        </div>
    );
};

export default MoreCar;