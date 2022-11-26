import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const MyProducts = () => {
    const [products, setProducts]=useState([])
    //const [loading, setLoading]=useState(false)
    const {user}=useContext(AuthContext)
    
    
    useEffect(()=>{
        
            fetch(`http://localhost:8000/products/${user?.email}`  )
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(err=>console.log(err))

    },[user?.email])

    
    return (
        <div>
        <h2 className="text-3xl">All Products</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                products.map((product, i) =><tr key={product._id}>
                    <th>{i+1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.status}</td>
                    <td><button onClick={()=>handleDeleteProduct(product)} className='btn btn-xs btn-danger'>Delete</button></td>
                </tr>)
            }
            
            </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyProducts;