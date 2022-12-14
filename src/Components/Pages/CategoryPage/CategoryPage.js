import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
// import { useLoaderData } from 'react-router-dom';
import Loading from '../Loader/Loading';
import ModalBuy from './ModalBuy';
import toast from 'react-hot-toast'

const CategoryPage = () => {
    const { user } = useContext(AuthContext);
    const [cUser, SetCUser] = useState('');
    const [modalData, SetModalData] = useState('');
    const [stockData, SetStockData] = useState('');
    const link = window.location.pathname
    const smallPart = link.slice(link.length - 1, link.length)
    // console.log(smallPart);

    const url = `https://purana-bazar-server.vercel.app/category/${smallPart}`

    // console.log(url);

    const { data: fridges = [], isLoading } = useQuery({
        queryKey: ['fridges'],
        queryFn: async ({ params }) => {
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })

    const handleReportBtn = (allData) => {
        fetch(`https://purana-bazar-server.vercel.app/report`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // alert('report added')
                toast.success('Report added Successfully!')
            })
    }

    const handleBookingForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const id = form.id.value;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.meetLocation.value;

        const formInfo = {
            id: id,
            name: name,
            email: email,
            itemname: itemName,
            photo: photo,
            price: price,
            phone: phone,
            location: location
        }

        // console.log(formInfo);
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                // alert('data successfully post')
            })

        fetch(`https://purana-bazar-server.vercel.app/fridgestock?id=${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // alert('data successfully update')
            })


        fetch(`https://purana-bazar-server.vercel.app/advertiseDelete?id=${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // alert('data successfully deleted')
                toast.success('Data added Successfully!')
            })

    }



    const handlebook = (fridge) => {
        // console.log('inside', fridge);
        SetStockData(fridge.stock)
        SetModalData(fridge);
    }

    useEffect(() => {
        fetch(`https://purana-bazar-server.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                SetCUser(data)
            })
    }, [user])

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='max-w-screen max-w-screen-xl h-fit mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    fridges?.map((fridge, i) => <div data-aos="fade-up" key={i}>
                        <div className="card w-4/5 mx-auto lg:w-96 bg-base-100 shadow-xl h-[50rem] my-5 lg:my-10">
                            <figure><img className='h-72 w-full' src={fridge.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{fridge.name}</h2>
                                <small>Stock: {fridge.stock}</small>
                                <p className="">Location: {fridge.location}</p>
                                <h4 className="text-xl">Resale Price: {fridge.resalePrice} TK</h4>
                                <h4 className="text-xl">Original Price: {fridge.originalPrice} TK</h4>
                                <h5 className="text-lg">Used: {fridge.yearUse} years</h5>
                                <div className="flex">
                                    <p>Seller: {fridge.sellerName} </p>
                                    {fridge.verify_user === 'true' && <div className='bg-blue-200 flex justify-center w-1/5 rounded-lg py-1'><FaCheck className='text-blue-600 text-xl' /></div>}
                                </div>

                                <p className="text-md">{fridge.description}</p>
                                <p>Post Time: {fridge.post}</p>
                                <div className="flex justify-between">
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary btn-sm lg:btn-md">Add WishList</button>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {
                                            cUser?.role === "Buyer" ?
                                                <>
                                                    <label onClick={() => handlebook(fridge)} htmlFor="book-modal" className="btn btn-primary btn-sm lg:btn-md">Book Now</label>
                                                    {/* modal code  */}
                                                    <input type="checkbox" id="book-modal" className="modal-toggle" />
                                                    <div className="modal">
                                                        <div className="modal-box">
                                                            {
                                                                user?.uid ?
                                                                    <>
                                                                        {
                                                                            stockData === 'sold' ?
                                                                                <div className="">
                                                                                    <h3 className="font-bold text-lg">Sorry!! You can't Book this product</h3>
                                                                                    <p className="py-4">Already has been sold</p>
                                                                                </div>
                                                                                :
                                                                                <div className="">
                                                                                    <ModalBuy handleBookingForm={handleBookingForm} fridge={modalData}></ModalBuy>
                                                                                </div>
                                                                        }

                                                                    </>
                                                                    :
                                                                    <div className="">
                                                                        <h3 className="font-bold text-lg">Sorry!! This Features is not available right now</h3>
                                                                        <p className="py-4">Please Login with Buyer Account</p>
                                                                    </div>
                                                            }
                                                            <div className="modal-action">
                                                                <label htmlFor="book-modal" className="btn">{user?.uid ? "cancel" : "ok"}</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                                :
                                                <label htmlFor="my-modal" className="btn btn-sm lg:btn-md btn-primary">Book Now</label>
                                        }
                                    </div>

                                    {/* modal code  */}
                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Sorry!! This Features is not available right now</h3>
                                            <p className="py-4">Please Login with Buyer Account..</p>
                                            <div className="modal-action">
                                                <label htmlFor="my-modal" className="btn">ok</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    cUser?.role === "Buyer" && <>
                                        <hr className='font-thin' />
                                        <div onClick={() => handleReportBtn(fridge)} className="btn btn-error btn-md lg:btn">Report to the Admin</div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;