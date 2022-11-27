import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Context/AuthProvider';


const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const [verifiedValue, setVerifiedValue] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate()


    const handleAddProductForm = (data) => {

        // fetch(`https://purana-bazar-server-arkoroybadhon.vercel.app/users?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {

        //     })
        // 
        let categoryVAlue = 0;
        if (data.product_category === 'walton') {
            categoryVAlue = 1
        }
        if (data.product_category === 'samsung') {
            categoryVAlue = 2
        }
        if (data.product_category === 'lg') {
            categoryVAlue = 3
        }

        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    let date = new Date().toLocaleDateString();
                    // console.log(date);

                    const itemInfo = {
                        name: data.productName,
                        photo: imgData.data.url,
                        company: data.product_category,
                        originalPrice: data.original_price,
                        resalePrice: data.resalePrice,
                        yearUse: data.year_use,
                        sellerName: data.sellerName,

                        sellerEmail: user?.email,

                        category: categoryVAlue,
                        condition: data.condition,
                        phone: data.phone,
                        post: date,
                        description: data.description,
                        year_purchase: data.year_purchase,
                        location: data.location,
                        // verify_user: data.verify_user,
                    }
                    // console.log(itemInfo);

                    fetch(`https://purana-bazar-server-arkoroybadhon.vercel.app/addItem`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(itemInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            navigate('/')
                        })
                    alert('Successfully item added')
                    navigate('/')
                }
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/5 lg:w-2/3 mx-auto">
                    <h1 className="text-2xl lg:text-5xl font-bold">Add a Product</h1>
                    <p className="py-6">SignUp Hurry !!</p>
                    <p className="">Best deals are waiting for you!! You can buy your desire refrigerator at very affordable prize</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleAddProductForm)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input {...register("productName", { required: 'Product Name field is required' })} type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Photo</span>
                            </label>
                            <input {...register("photo", { required: 'Product Photo field is required' })} type="file" className="file-input w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input {...register("sellerName", { required: 'Seller Name field is required' })} type="text" placeholder="Selller Name" className="input input-bordered" />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input defaultValue={user?.email} disabled {...register("sellerEmail", { required: 'Seller Email field is required' })} type="text" placeholder="Selller Name" className="input input-bordered" />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resale Price</span>
                            </label>
                            <input {...register("resalePrice", { required: 'Resale Price field is required' })} type="text" placeholder="resale price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select {...register("condition", { required: 'Condition field is required' })} className="select select-bordered w-full max-w-xs">
                                <option defaultValue>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input {...register("phone", { required: 'Phone field is required' })} type="text" placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <select {...register("location", { required: 'Location field is required' })} className="select select-bordered w-full max-w-xs">
                                <option defaultValue>Dhaka</option>
                                <option>Rangpur</option>
                                <option>Dinajpur</option>
                                <option>Rajshahi</option>
                                <option>Chittagong</option>
                                <option>Barishal</option>
                                <option>Joypurhat</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <select {...register("product_category", { required: 'Product Category field is required' })} className="select select-bordered w-full max-w-xs">
                                <option defaultValue>walton</option>
                                <option>samsung</option>
                                <option>lg</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input {...register("description", { required: 'Description field is required' })} type="text" placeholder="description" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input {...register("original_price", { required: 'Original Price field is required' })} type="text" placeholder="original price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year Of Purchase</span>
                            </label>
                            <input {...register("year_purchase", { required: 'This field is required' })} type="text" placeholder="year of purchase" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year Of Use</span>
                            </label>
                            <input {...register("year_use", { required: 'This field is required' })} type="text" placeholder="year of use" className="input input-bordered" />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Are you a Verified User?</span>
                            </label>
                            <select {...register("verify_user", { required: 'Name field is required' })} className="select select-bordered w-full max-w-xs">
                                <option defaultValue>false</option>
                                <option >true</option>
                            </select>
                        </div> */}



                        <input className='btn btn-accent w-full mt-4' value="Add Item" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;