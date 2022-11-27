import React, { useEffect, useState } from 'react';
import AdvertiseProduct from './AdvertiseProduct';
import BookingModal from './BookingModal';

const Advertisement = () => {
    const [product, setProduct]=useState()
const [products, setProducts]=useState([])
    useEffect(()=>{
    fetch('http://localhost:8000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err))

    },[])
    return (
        <div>
            {products.length===0?"":<>
            <h2 className='text-center text-2xl'>Advertisement Section</h2> <br /> <br />
            
            <div className='grid gap-10 lg:grid-cols-3'>
                {products.map((product,i)=><AdvertiseProduct setProduct={setProduct} product={product} key={i}></AdvertiseProduct>)}
            </div>
            
            
            </>}
            {
                product && <BookingModal product={product}></BookingModal>
            }
            
        </div>
    );
};

export default Advertisement;