import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email address!').required('Email address is required!'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required!'),
});

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.prevenDefault();
        setError("");

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            // Save token & user data to local storage
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));

            alert('Login successful!');
            navigate('/'); // Redirect user after login
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
                    <p className="text-sm text-gray-500 text-center mt-1">Welcome back! Please enter your credentials.</p>

                    <form className="mt-6" onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Remember Me
                            </label>
                            <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
                        </div>

                        <button type='submit' className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition">
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
