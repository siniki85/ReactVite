import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

const registerSchema = yup.object().shape({
    fullName: yup.string().required('Full Name is required!'),
    email: yup.string().email('Invalid email address!').required('Email address is required!'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required!'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Confirm password must match with Pasword')
        .required('Confirm password is required!')
});

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onSubmitHandler = async (data) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                fullName: data.fullName,
                email: data.email,
                password: data.password
            });

            //Reset form on success
            reset();

            //Navigate to login
            navigate('/login');
        } catch (error) {
            setError(error.res?.data?.message || 'Registration Failed! Try Again!')
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
                    <p className="text-sm text-gray-500 text-center mt-1">Join us and find your dream job!</p>

                    <form className="mt-6" onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your full name"
                                {...register('fullName')}
                            />
                            {errors.fullName && <p className='text-red-500 text-xs'>{errors.fullName.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                                {...register('email')}
                            />
                            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Create a password"
                                {...register('password')}
                            />
                            {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Confirm your password"
                                {...register('confirmPassword')}
                            />
                            {errors.confirmPassword && <p className='text-red-500 text-xs'>{errors.confirmPassword.message}</p>}
                        </div>

                        <button type='submit' className="w-full bg-green-500 text-white py-2 mt-4 rounded-lg hover:bg-green-600 transition">
                            Register
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register;
