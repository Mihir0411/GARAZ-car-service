import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';
import './Service.css'


const OurServices = () => {
    const [service, setService] = useState([])

    useEffect(()=>{
        const url = `https://enigmatic-brushlands-42246.herokuapp.com/service`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
        console.log(service)
    },[])
    return (
        <section className="services-container  bg-info">
        <div className="text-center service">
            <h5 style={{color: 'white'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="serviceDetail">
            {
                service.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default OurServices;