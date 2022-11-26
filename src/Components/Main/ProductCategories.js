import React from 'react';

const ProductCategories = () => {
    return (
        <div>
            <h2 className='text-center text-2xl'>Product Categories</h2> <br /> 
            <div className='grid gap-10 lg:grid-cols-3'>
                <button className='btn btn-primary'>ASUS</button>
                <button className='btn btn-primary'>Lenovo</button>
                <button className='btn btn-primary'>Dell</button>
            </div>
            

        </div>
    );
};

export default ProductCategories;