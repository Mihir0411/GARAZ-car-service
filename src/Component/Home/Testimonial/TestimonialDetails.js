import React from 'react';
import './TestimonialDetails.css'


const TestimonialDetails = (props) => {
    const { name, company, imageURL,description } = props.testimonial;
console.log(props.testimonial)
    return (
        <div class="review">
                <div className="d-flex">
                    <img style={{width:"50px"}}src={imageURL} alt=""/>
                    <h4>{name}</h4>
                </div>
                <div>
                  <p>{company}</p>
                </div>
                <div>
                  <p>{description}</p>
                </div>
        </div>
    );
};

export default TestimonialDetails;