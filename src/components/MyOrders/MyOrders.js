import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const {user} = useAuth()
    console.log(user.email);
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect( () =>{
        fetch(`https://glacial-mountain-00988.herokuapp.com/orders/${user?.email}`)
         .then(res=>res.json())
         .then(data => setOrders(data))
    }, [user]);
    console.log(orders);
    

    // handle delete
    const handleDelete = id => {
        const url = `https://glacial-mountain-00988.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.deletedCount){
                    alert('Your Booking Canceled')
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                }
            })
    }


    return (
        <div className="my-booking">
            <h2>My Ordering Car</h2>
            {
                orders.map(order => <div className="container service mt-3 pb-3" key={order._id}>
                <img className="service-img img-fluid" src={order.bookingImage}  alt="" />
                <h3>Your Order Name: {order.bookingName}</h3>
                <h3>Booking Price: {order.bookingPrice} $</h3>
                <h5 className="mx">{order.bookingDescription}</h5>
                <button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Cancel Place Order</button><br />
            </div>)
            }
        </div>
    );
};

export default MyOrders;