import React, { useEffect, useState } from 'react';

const CompanySummary = () => {
const [buyers, setBuyers]=useState([])
const [sellers, setSellers]=useState([])

useEffect(()=>{
    fetch('http://localhost:8000/buyers')
    .then(res=>res.json())
    .then(data=>setBuyers(data))
    .catch(err=>console.log(err))
    
    fetch('http://localhost:8000/sellers')
    .then(res=>res.json())
    .then(data=>setSellers(data))
    .catch(err=>console.log(err))
},[])




    return (
        <div>
            <h2 className='text-2xl text-center'>Company User Info</h2> 
            <div className='grid lg:grid-cols-3'>
                <p className='text-primary'>Buyers:{buyers.length}</p>
                <p className='text-primary'>Sellers:{sellers.length}</p>
                <p className='text-primary'>Total Users: {buyers.length + sellers.length}</p>
            </div>
        </div>
    );
};

export default CompanySummary;