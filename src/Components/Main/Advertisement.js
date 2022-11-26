import React, { useEffect, useState } from 'react';
import AdvertiseProduct from './AdvertiseProduct';

const Advertisement = () => {
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
                {products.map((product,i)=><AdvertiseProduct product={product} key={i}></AdvertiseProduct>)}
            </div>
            
            
            </>}
            
            
        </div>
    );
};

export default Advertisement;