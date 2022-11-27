import React from 'react';

const ModalBuy = ({fridge,handleBookingForm}) => {
    // console.log(fridge);

    const {name, sellerEmail, sellerName, resalePrice, photo } = fridge;

    console.log('seller email',sellerEmail);

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <h4 className="text-xl font-bold mt-2">Booking Form</h4>
            <form onSubmit={handleBookingForm} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input readOnly defaultValue={sellerName} name='name' type="text" placeholder="Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input readOnly defaultValue={fridge.sellerEmail} name='email' type="email" placeholder="email" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Item Name</span>
                    </label>
                    <input readOnly defaultValue={name} name='itemName' type="text" placeholder="Item name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input readOnly defaultValue={photo} name='photo' type="text" placeholder="photo" className="input input-bordered" />
                </div>

                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input readOnly defaultValue={resalePrice} name='price' type="text" placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Meet Location</span>
                    </label>
                    <input name='meetLocation' type="text" placeholder="Meet Location" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ModalBuy;