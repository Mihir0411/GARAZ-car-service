import React, { useEffect, useState } from 'react';
import TestimonialDetails from './TestimonialDetails';
import './TestimonialDetails.css'



const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        const url = `https://enigmatic-brushlands-42246.herokuapp.com/review`
        fetch(url)
        .then(res => res.json())
        .then(data => setReview(data))
        console.log(review)
        
    },[])
    return (
        <section className="services-container bg-info">
            <div className="text-center customer">
                <h2>What Our Customer <br /> Says </h2> 
            </div>

            <div className="reviews">
                <div className="tes">
                    {
                        review.map(testimonial => <TestimonialDetails testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>

            </div>

        </section>
    );
};

export default Testimonial;