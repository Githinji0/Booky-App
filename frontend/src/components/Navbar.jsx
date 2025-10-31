import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../pages/(auth)/Profile';



export const Navbar = () => {

    return <nav className='w-[full] bg-gray-800 p-4 flex justify-between items-center text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
        <h1>Booky App</h1>
        <div className="bg-red-400 ">
            <Link to="/">Home</Link>
            <Link to="/create">New</Link>
            <Link to="/profile">Profile</Link>

        </div>

    </nav>;
}