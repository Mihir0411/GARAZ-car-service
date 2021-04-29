import React from 'react';
import auto from '../../../images/auto-mechanic.jpg'
import './feature.css'

const Feature = () => {
    return (
        <section className="features-service bg-danger">
            <div className="container ">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img style={{width:"100%", marginTop:"30px"}} src={auto} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center feature">
                        <h1>We’re Certified & Expert Car Servicing Agency</h1>
                        <p><b>1. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born will give</b></p>
                        <p><b>2. Professional & Expert</b></p>
                        <p><b>3. Quality Servicing Agency</b></p>
                        <p><b>4. Awards Winning Company</b></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;