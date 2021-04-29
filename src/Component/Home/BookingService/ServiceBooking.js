import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingPayment from '../BookingPayment/BookingPayment';

const ServiceBooking = () => {
    const { _id } = useParams()
    const [serviceItem, setServiceItem] = useState([])
    useEffect(() => {
        const url = `https://enigmatic-brushlands-42246.herokuapp.com/service/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceItem(data))
        console.log(serviceItem)
    }, [])
    return (
        <div>
            {
                serviceItem.map(item => <BookingPayment item={item}></BookingPayment>)
            }
        </div>
    );
};

export default ServiceBooking;