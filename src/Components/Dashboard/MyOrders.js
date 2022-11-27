//import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {

    //const { data: bookings = [], refetch} = useQuery({
    //    queryKey: ['allBuyers'],
    //    queryFn: async () => {
    //        const res = await fetch(`http://localhost:8000/bookings`);
    //        const data = await res.json();
    //        return data
    //    }
    //});
    return (
        <div>
            <h2 className="text-3xl">All Bookings</h2>
        <div className="overflow-x-auto">
            {/*<table className="table w-full">
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
                bookings.map((buyer, i) =><tr key={buyer._id}>
                    <th>{i+1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td><button onClick={()=>handleDeleteBuyer(buyer)} className='btn btn-xs btn-danger'>Delete</button></td>
                </tr>)
            }
            
            </tbody>
            </table>*/}
        </div>
    </div>

    );
};

export default MyOrders;