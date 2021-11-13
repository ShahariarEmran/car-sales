import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
// import Reviews from '../../../Reviews/Reviews';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    


    const {user} = useAuth();

    const onSubmit = data => {
        console.log(data);
        
        axios.post('https://glacial-mountain-00988.herokuapp.com/reviews', data)
         .then(res => {
             if(res.data.insertedId){
                 alert('Added Successfully');
                 reset();
             }
         })
    }

    return ( 
            <div className="container review">
            <div className="container add-service mt-5">
            <h2>Please Add your Review</h2><br />
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} defaultValue={user.displayName} placeholder="Name" />

            <input {...register("email")} defaultValue={user.email} placeholder="Email" />

            <input {...register("rating")} type="number" placeholder="type your rating number" />

            <textarea {...register("review")} placeholder="Comment Review" />
            
            <input className="btn btn-warning" type="submit" />
            </form><br /><br /><br />
        </div>
        </div>
    );
};

export default AddReview;