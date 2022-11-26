import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContext';

const MyProducts = () => {
    
    const {user}=useContext(AuthContext)
    const { data: products = [], refetch} = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/products/${user?.email}`);
            const data = await res.json();
            return data
        }
    });
    
    

    const handleDeleteProduct = product => {
        fetch(`http://localhost:8000/products/${product._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Product ${product.name} deleted successfully`)
            }
        })
    } 
    
    
    const makeAdvertise = product => {
        fetch(`http://localhost:8000/products/${product._id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success(`Product ${product.name} advertised successfully`)
            }
        })
    }

    return (
        <div>
        <h2 className="text-2xl">All Products</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Advertise</th>
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
                    <td>{product.status==="available" && !product?.isAdvertised?<button onClick={()=>makeAdvertise(product)} className='btn btn-xs btn-danger'>Make Advertise</button>:""}</td>
                </tr>)
            }
            
            </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyProducts;