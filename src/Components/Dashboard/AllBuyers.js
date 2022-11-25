import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: buyers = []} = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/buyers`);
            const data = await res.json();
            return data
        }
    });
    return (
        <div>
            All Buyers here <br />
            {buyers.length}
        </div>
    );
};

export default AllBuyers;