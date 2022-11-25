import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
//import { getRole } from '../Components/Dashboard/users';
import Navbar from '../Components/Main/Navbar';
import { AuthContext } from '../contexts/UserContext';
//import useAdmin from '../hooks/useAdmin';
//import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const [userType, setUserType]=useState();
    const { user } = useContext(AuthContext);
    //const [isAdmin] = useAdmin(user?.email)




    useEffect(()=>{
        fetch(`http://localhost:8000/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUserType(data.userType))
        .catch(err=>console.log(err))
    },[user?.email])
    //getRole()
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
                                <li><Link to="/dashboard/orders">My Orders</Link></li>
                            </>
                        }
                         {
                            userType==="Seller" && <>
                                <li><Link to="/dashboard/allusers">Add a Product</Link></li>
                                <li><Link to="/dashboard/adddoctor">My Products</Link></li>
                                <li><Link to="/dashboard/managedoctors">My Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;