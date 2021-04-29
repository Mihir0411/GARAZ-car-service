import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Reviews = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [image, setImage] = useState(null)

    const onSubmit = data => {
        const addReview = {
            name: data.name,
            company: data.company,
            imageURL: image,
            description: data.description
        }
        const url = `https://enigmatic-brushlands-42246.herokuapp.com/addReviews`
        console.log(addReview)
        fetch(url, {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => console.log('success'))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'a37631b9a9a1b994a238dcbcf582ceac')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="container body">
                <div className="row">
                    <div className="d-flex">
                        <div className="clo-md-4 sidebar">
                            <h3>GEREZ</h3>
                            <h6>Booking List</h6>
                            <Link to="/review"><h5 className="text-center">Reviews</h5></Link>
                        </div>
                        <div className="col-md-8 addInput">
                            <h4>Please add your valuable opinion</h4>
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="" >
                                    <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="form-control" /><br></br>
                                    <input type="text" {...register("company", { required: true })} placeholder="Company Name & designation" className="form-control" /><br></br>
                                    <input type="text" {...register("description", { required: true })} placeholder="your opinion" className="form-control" /><br></br>
                                </div>
                                <div className="d-flex">
                                    <input type="submit" />
                                    <input className="upload" name="exampleRequired" type="file" onChange={handleImageUpload} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;