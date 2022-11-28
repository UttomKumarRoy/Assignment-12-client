import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useContext(AuthContext)
    const navigate = useNavigate();
    

    const handleAddProduct =(data)=>{
    console.log(data)
    const product={
        name: data.name,
        photo:data.photo,
        price: data.price,
        conditionType: data.conditionType,
        mobile:data.mobile,
        location:data.location,
        productCategory:data.productCategory,
        description:data.description,
        originalPrice:data.originalPrice,
        year:data.year,
        email:user?.email,
        sellerName:user?.displayName,
        status:"available",
        postTime:new Date()
    }

       

   
    
    
        fetch('https://laptop-reseller-server.vercel.app/products',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(product) })
            .then(res => res.json())
            .then(data =>{
            //setCreatedUserEmail(email);
            toast.success("Product added successfully")
            navigate("/dashboard/myProducts");
             console.log(data);
         })
 
         
        
}
    return (
        <div className='h-[900px] flex justify-center items-center'>
            <div className='w-96 p-2'>
                <h2 className='text-xl text-center'>Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Product Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Photo URL</span></label>
                        <input type="text" {...register("photo", {
                            required: "Product Photo URL is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Price</span></label>
                        <input type="number" {...register("price", {
                            required: "Product Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>

                    <div>
                    <label className="label"> <span className="label-text">Select Product Condition Type</span></label>
                    <select {...register("conditionType")}>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile Number</span></label>
                        <input type="text" {...register("mobile", {
                            required: "Mobile Number is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Location is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>

                    <div>
                    <label className="label"> <span className="label-text">Product Category</span></label>
                    <select {...register("productCategory")}>
                        <option value="Asus">Asus</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="Dell">Dell</option>
                    </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Description</span></label>
                        <input type="text" {...register("description", {
                            required: "Product Description is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="number" {...register("originalPrice", {
                            required: "Original Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Year of Purchase</span></label>
                        <input type="text" {...register("year", {
                            required: "Year of Purchase is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                </form>
               

            </div>
        </div>
    );
};

export default AddAProduct;