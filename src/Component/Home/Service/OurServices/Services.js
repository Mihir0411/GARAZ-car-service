import React, { useEffect, useState } from 'react';
import ServiceBooking from '../../BookingService/ServiceBooking';
import './Service.css'

const Services = () => {
    const [service, setService] = useState([])

    useEffect(()=>{
        const url = `https://enigmatic-brushlands-42246.herokuapp.com/service`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="">
        {
            service.map(product =><ServiceBooking service={product}></ServiceBooking>)
        }
     </div>
    );
};

export default Services;