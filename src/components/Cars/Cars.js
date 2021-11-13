import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://glacial-mountain-00988.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setCars(data.slice(0, 6)));
    }, [])

    return (
        <div className="container ">
            <h2 className="text-primary mt-2">Our Car</h2>
            <div className="car-container">
            {
                cars.map(car => <Car
                    key={car._id}
                    car={car}
                ></Car>)
            }
            </div>
        </div>
    );
};

export default Cars;