import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Purchase.css';

const Purchase = () => {
    const { carId } = useParams();
    const [car, setCar] = useState({})

    // for form
    const { register, handleSubmit, reset } = useForm();

    // use axios
    const onSubmit = data => {
        data.bookingImage = car.img
        data.bookingName = car.name
        data.bookingPrice = car.price
        data.bookingDescription = car.description

        console.log(data);
        
        axios.post('https://glacial-mountain-00988.herokuapp.com/orders', data)
         .then(res => {
             if(res.data.insertedId){
                 alert('Your Order Successfully');
                 reset();
             }
         })
    }

    useEffect(() => {
        fetch(`https://glacial-mountain-00988.herokuapp.com/service/${carId}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [])


    return (
        <div className="container add-service mt-2 mb-5">
        <img className="mb-2" src={car.img} height="300px" weigh="500px" alt="" /><br />
        <h4>Your Order Car Name: {car.name}</h4>
        {/* <h6>Your Booking Id: {serviceId}</h6> */}
        <p className="text-center description">{car.description}</p>

        <h3 className="text-primary">Please give me your info</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <input {...register("address", { required: true })} placeholder="Address" />
        <input type="number" {...register("Phone", { required: true })} placeholder="Phone" />
        <input type="email" {...register("email", { required: true })} placeholder="Email" />
        <button className="btn btn-danger" onClick={() => handleSubmit(car._id)}>Confirm Your Booking</button>
        
        </form>

    </div>
    );
};

export default Purchase;