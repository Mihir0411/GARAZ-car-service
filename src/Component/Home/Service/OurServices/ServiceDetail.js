import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const ServiceDetail = (props) => {
  const {name,price,description,_id,imageURL} = props.service
  
    return (
        <div className=" services">
            <img style={{height: '70px'}} src={imageURL} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <p>${price}</p>
            <Link to={`/serviceBooking/${_id}`}><button className="bookingBtn btn-success">Booking Now</button></Link>
        </div>
    );
};

export default ServiceDetail;