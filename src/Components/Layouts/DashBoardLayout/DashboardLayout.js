import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState('');


    useEffect(() => {

        fetch(`https://purana-bazar-server.vercel.app/currentusers?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
            .catch(err => console.log(err))
    }, [user])

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile max-w-screen-xl mx-auto ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <label tabIndex={2} className="btn btn-ghost lg:hidden" htmlFor="dashboard-drawer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <h3 className="text-2xl font-bold mt-10">Dashboard Links</h3>
                        {
                            currentUser?.role === 'Buyer' && <>
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            </>
                        }
                        {
                            currentUser?.role === 'Seller' && <>
                                <li><Link to='/dashboard/addproduct'>Add a product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            currentUser?.role === 'Admin' && <>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;