import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import Loading from '../../../Shared/Loading/Loading';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate();


    const handleAddDoctor = (data) => {
        console.log('ADditem');

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log(image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',  
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    
                }
            })
    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }


    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">ADD a Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" {...register("image", { required: 'Image is required' })} className="input  w-full max-w-xs" />
                    {errors.name && <span className='text-red-600'>{errors.name?.message}</span>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};


/*
* Three places to store images
* 1. Image hostingserver
* 2. File system of your server
* 3. mongodb (database)
*/


export default AddItem;