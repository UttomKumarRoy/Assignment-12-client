import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch} = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/sellers`);
            const data = await res.json();
            return data
        }
    });

    const handleDeleteSeller = seller => {
        fetch(`http://localhost:8000/sellers/${seller._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Seller ${seller.name} deleted successfully`)
            }
        })
    }


    const makeVerifiedSeller = seller => {
        fetch(`http://localhost:8000/sellers/${seller._id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success(`Seller ${seller.name} made verified successfully`)
            }
        })
    }
    return (
        <div>
        <h2 className="text-3xl">All Sellers</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
                <th>Verification</th>
            </tr>
            </thead>
            <tbody>
            {
                sellers.map((seller, i) =><tr key={seller._id}>
                    <th>{i+1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td><button onClick={()=>handleDeleteSeller(seller)} className='btn btn-xs btn-danger'>Delete</button></td>
                    <td>{seller?.isVerified?"verified":<button onClick={()=>makeVerifiedSeller(seller)} className='btn btn-xs btn-danger'>Make Verified</button>}</td>
                </tr>)
            }
            
            </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllSellers;