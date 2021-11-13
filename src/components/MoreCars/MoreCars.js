import React, { useEffect, useState } from 'react';
import MoreCar from '../MoreCar/MoreCar';
import './MoreCars.css'

const MoreCars = () => {
    const [more, setMore] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setMore(data));
    }, [])

    return (
        <div className="container pb-3 ">
            <h2>Our More Care</h2>
            <div className="more-container">
            {
                more.map(more => <MoreCar
                    key={more._id}
                    more={more}
                ></MoreCar>)
            }
            </div>
        </div>
    );
};

export default MoreCars;