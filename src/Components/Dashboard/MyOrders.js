import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContext';

const MyOrders = () => {

    const{user}=useContext(AuthContext)

    const { data: bookings = [], refetch} = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch(`https://laptop-reseller-server.vercel.app/bookings/${user?.email}`);
            const data = await res.json();
            return data
        }
    });

    const handleDeleteBooking=(booking)=>{
        fetch(`https://laptop-reseller-server.vercel.app/bookings/${booking._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Product ${booking.name} deleted successfully`)
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl">All Bookings</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Pay</th>
            </tr>
            </thead>
            <tbody>
            {
                bookings.map((booking, i) =><tr key={booking._id}>
                    <th>{i+1}</th>
                    <td><img className='h-[50px]' src={booking.photo} alt='pic'/></td>
                    <td>{booking.productName}</td>
                    <td>{booking.price}</td>
                    <td><button onClick={()=>handleDeleteBooking(booking)} className='btn btn-xs btn-danger'>Delete</button></td>
                    <td><button className='btn btn-xs btn-danger'>Pay</button></td>
                </tr>)
            }
            
            </tbody>
            </table>
        </div>
    </div>

    );
};

export default MyOrders;