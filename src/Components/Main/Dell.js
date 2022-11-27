import React, { useEffect, useState } from 'react';
import AdvertiseProduct from './AdvertiseProduct';
import BookingModal from './BookingModal';

const Dell = () => {
    const [products,setProducts]=useState([])
    const [product, setProduct]=useState()

    useEffect(()=>{
        fetch('http://localhost:8000/dell')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err))
    },[])
    return (
        <div className='grid gap-10 lg:grid-cols-3'>
            {products.map((product,i)=><AdvertiseProduct setProduct={setProduct} product={product} key={i}></AdvertiseProduct>)}
            {
                product && <BookingModal product={product}></BookingModal>
            }
        </div>
    );
};

export default Dell;