import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateName, signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const navigate=useNavigate()

    const handleSignUp = (data) => {
        setSignUPError('');
        console.log(data.userType);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
                updateName(data.name)
                    .then(() => {
                        saveUser(data.name, data.email, data.userType);
                        navigate('/')
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email, userType) =>{
        const user ={name, email, userType};
        fetch('https://laptop-reseller-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            toast.success(data.response)
            console.log(data.response);
        })
    }
const handleGoogleSign=()=>{
    signInWithGoogle()
    .then(result=>{
        const user=result.user;
        console.log(user);
        const userType="Buyer";
        saveUser(user.displayName, user.email,userType );
        navigate('/')
    })
}
    

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-2'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <div>
                    <label className="label"> <span className="label-text">Select User Type</span></label>
                    <select {...register("userType")}>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>

                    </div>

                    <input className='btn btn-secondary w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-primary w-full' onClick={handleGoogleSign}>Sign Up with Google</button>

            </div>
        </div>
    );
};

export default SignUp;