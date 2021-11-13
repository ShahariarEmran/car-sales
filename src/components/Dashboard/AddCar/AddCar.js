import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddCar.css'

const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        
        axios.post('http://localhost:5000/services', data)
         .then(res => {
             if(res.data.insertedId){
                 alert('Added Successfully');
                 reset();
             }
         })
    }

    return (
        <div>
            <div className="add-service mt-5">
            <h2>Please Add-Service</h2><br />
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="Image Url" />
            <input className="btn btn-warning" type="submit" />
            </form><br /><br /><br />
        </div>
        </div>
    );
};

export default AddCar;