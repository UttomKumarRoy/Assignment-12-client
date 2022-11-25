import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = []} = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/sellers`);
            const data = await res.json();
            return data
        }
    });
    return (
        <div>
            All Sellers here <br />
            {sellers.length}
        </div>
    );
};

export default AllSellers;