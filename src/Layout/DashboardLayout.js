import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Main/Navbar';
import { AuthContext } from '../contexts/UserContext';


const DashboardLayout = () => {
    const [userType, setUserType]=useState();
    const { user } = useContext(AuthContext);

    useEffect(()=>{
        fetch(`https://laptop-reseller-server.vercel.app/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUserType(data.userType))
        .catch(err=>console.log(err))
    },[user?.email])
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li className='text-green-800 bg-black'><Link to="/dashboard">My DashBoard</Link></li>
                        {
                            userType==="Admin" && <>
                                <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                            </>
                        }
                         {
                            userType==="Buyer" && <>
                                <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                            </>
                        }
                         {
                            userType==="Seller" && <>
                                <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                                <li><Link to="/dashboard/myProducts">My Products</Link></li>
                                <li><Link to="/dashboard/myBuyers">My Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;