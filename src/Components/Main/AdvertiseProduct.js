import React from 'react';

const AdvertiseProduct = ({product}) => {
    console.log(product);
    const {photo,name, price, description} =product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Laptop" /></figure>
            <div className="card-body">
             <h2 className="card-title">{name}!</h2>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AdvertiseProduct;