import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault() 
        
    }
    
return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-slate-200 rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                Sign Up
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <div className="">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                        Name
                    </label>
                    <input
                        placeholder='Name'
                        id='name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    </div>
                    {errors.name && <p className='text-red-400'>{errors.name}</p>}
                </div>
                <div className="mb-2">
                    <div className="">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                        Email
                    </label>
                    <input
                        placeholder='Email'
                        id='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    </div>
                    {errors.email && <p className='text-red-400'>{errors.email}</p>}
                </div>
                <div className="mb-2">
                    <div className="">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        placeholder='Password'
                        id='password'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    </div>
                    {errors.password && <p className='text-red-400'>{errors.password}</p>}
                </div>
                <div className="mb-2">
                    <div className="">
                        <label
                            htmlFor="passwordConfirm"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password Confirmation
                        </label>
                        <input
                            placeholder='Password Confirmation'
                            id='passwordConfirm'
                            value={passwordConfirm}
                            onChange={(e)=>{setPasswordConfirm(e.target.value)}}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {errors.password_confirmation && <p className='text-red-400'>{errors.password_confirmation}</p>}
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Register
                    </button>
                </div>
            </form>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                You already have an account?{" "}
                <Link
                    to='/login'
                    className="font-medium text-purple-600 hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </div>
    </div>
    )
}
