import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './admin.css'

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [image, setImage] = useState(null)

    const onSubmit = data => {
        const addData = {
            name: data.name,
            price: data.price,
            imageURL: image,
            description: data.description
        }
        const url = `https://enigmatic-brushlands-42246.herokuapp.com/addService`
        console.log(addData)
        fetch(url, {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(addData)
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
                            <h3 className="text-white">GEREZ</h3>
                            <h6 className="text-white">Manage Product</h6>
                        </div>
                        <div className="col-md-8 addInput">
                            <h4>Add Service</h4>
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex" >
                                    <div>
                                        <label>Service Name</label><br></br>
                                        <input type="text" {...register("name", { required: true })} className="form-control" />
                                    </div>
                                    <div style={{ marginLeft: "100px" }}>
                                        <label>Service Price</label><br></br>
                                        <input type="text" {...register("price", { required: true })} className="form-control" />
                                    </div>
                                </div>
                                <div>
                                    <label>Description</label><br></br>
                                    <input className="box" type="text" {...register("description", { required: true })} />
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

export default Admin;