import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [], refetch} = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/buyers`);
            const data = await res.json();
            return data
        }
    });

 const handleDeleteBuyer = buyer => {
        fetch(`http://localhost:8000/buyers/${buyer._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Buyer ${buyer.name} deleted successfully`)
            }
        })
    }
    return (
    <div>
        <h2 className="text-3xl">All Buyers</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                buyers.map((buyer, i) =><tr key={buyer._id}>
                    <th>{i+1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td><button onClick={()=>handleDeleteBuyer(buyer)} className='btn btn-xs btn-danger'>Delete</button></td>
                </tr>)
            }
            
            </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllBuyers;