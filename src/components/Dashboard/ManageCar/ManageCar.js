import React, { useEffect, useState } from 'react';
import './ManageCar.css'

const ManageCar = () => {
    const [services, setServices] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/services')
         .then(res=>res.json())
         .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        console.log('batton clicked', id);
        const url = `http://localhost:5000/delete-services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                }
            })
    }

    return (
        <div className="container-fluid pb-5">
            <h2 className="mt-4">Manage Services</h2>
            {
                services.map(service => <div className="container service mt-3 pb-3" key={service._id}>
                    <img className="service-img img-fluid" src={service.img}  alt="" />
                    <h3>{service.name}</h3>
                    <h3>Booking Price: {service.price} BDT</h3>
                    <h5 className="mx">{service.description}</h5>
                    <button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete {service.name.toLowerCase()}</button><br />
                </div>)
            }
            </div>
    );
};

export default ManageCar;