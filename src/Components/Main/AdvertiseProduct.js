import React from 'react';

const AdvertiseProduct = ({product,setProduct}) => { 
    console.log(product);
    const {photo,name, price, description, location, originalPrice, sellerName,postTime,year} =product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Laptop" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                    <p>Original Price: {originalPrice}</p>
                    <p>Seller Name: {sellerName}</p>
                    <p>Posting Time: {postTime}</p>
                    <p>Year of Use: {year}</p>
                    <div className="card-actions justify-end">
                        <label onClick={()=>setProduct(product)} htmlFor="book-modal" className="btn btn-primary">Book Now</label>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProduct;