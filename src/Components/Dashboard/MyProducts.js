import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContext';

const MyProducts = () => {
    //const [products, setProducts]=useState([])
    //const [loading, setLoading]=useState(false)
    const {user}=useContext(AuthContext)
    const { data: products = [], refetch} = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/products/${user?.email}`);
            const data = await res.json();
            return data
        }
    });
    
    //useEffect(()=>{
        
    //        fetch(`http://localhost:8000/products/${user?.email}`  )
    //        .then(res=>res.json())
    //        .then(data=>setProducts(data))
    //        .catch(err=>console.log(err))

    //},[user?.email, ])

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
                    <td>{product.status==="available"?<button className='btn btn-xs btn-danger'>Make Advertise</button>:""}</td>
                </tr>)
            }
            
            </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyProducts;