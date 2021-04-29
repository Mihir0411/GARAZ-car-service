import React from 'react';
import { useForm } from 'react-hook-form';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';
import { Link } from 'react-router-dom';



const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const BookingPayment = ({ item }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div>
            <div className="container body">
                <div className="row">
                    <div className="d-flex">
                        <div className="clo-md-4 sidebar">
                            <h3 className="text-white">GEREZ</h3>
                            <h6 className="text-white">Booking List</h6>
                            <Link to="/review"><h5 className="text-center">Reviews</h5></Link>
                        </div>
                        <div className="col-md-8 addInput">
                            <h4>{item.name}</h4>
                            <form className="form" >
                                <div className="" >
                                    <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="form-control" /><br></br>
                                    <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="form-control" /><br></br>
                                    <input type="text" {...register("address", { required: true })} placeholder="Enter Your Address" className="form-control" />
                                </div>
                            </form>
                            <div className="mt-5">
                                <Elements stripe={stripePromise}>
                                    <PaymentCard item={item.price}></PaymentCard>
                                </Elements>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPayment;