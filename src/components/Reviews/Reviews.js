import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = (props) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="container">
            <h2 className="mt-5 text-primary">Reviews Page</h2>
           <div className="container re">
           {
               reviews.map(review => <SingleReview
               key={review._id}
               review={review}
               ></SingleReview>)
           }
           </div>
        </div>
    );
};

export default Reviews;