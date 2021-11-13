import React from 'react';
import error from '../Images/error.png'

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;