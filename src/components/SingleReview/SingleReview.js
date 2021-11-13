import React from 'react';
import Rating from 'react-rating';
import './SingleReview.css'

const SingleReview = (props) => {
    const {name, rating, review} = props.review;
    return (
        <div className="container rev mt-5">
            <h3>Name: {name}</h3>
            <Rating 
            initialRating={rating}
            readonly
            />
            <p>Comment: {review}</p>

        </div>
    );
};

export default SingleReview;