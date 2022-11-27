import React, { useEffect, useState } from 'react';
import AdvertiseProduct from './AdvertiseProduct';

const ASUS = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/asus')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err))
    },[])
    return (
        <div className='grid gap-10 lg:grid-cols-3'>
            {products.map((product,i)=><AdvertiseProduct product={product} key={i}></AdvertiseProduct>)}
        </div>
    );
};

export default ASUS;