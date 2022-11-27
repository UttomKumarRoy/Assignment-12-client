import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    return (
        <div>
            <h2 className='text-center text-2xl'>Product Categories</h2> <br /> 
            <div className='grid gap-10 lg:grid-cols-3'>
                <Link to='/asus'><button className='btn btn-primary'>ASUS</button></Link>
                <Link to='/lenovo'><button className='btn btn-primary'>Lenovo</button></Link>

                <Link to='/dell'><button className='btn btn-primary'>Dell</button></Link>

            </div>
            

        </div>
    );
};

export default ProductCategories;