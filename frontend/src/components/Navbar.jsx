import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../pages/(auth)/Profile';



export const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    return <nav className='w-[full] bg-gray-800 p-4 flex justify-between items-center text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
        <h1>Booky App</h1>
        <div className="bg-red-400 ">
            <Link className='a' to="/">Home</Link>
            <Link className='a' to="/create">New</Link>
            {
                isAuthenticated ? <Link className='a' to="/profile">Profile</Link> : <Link className='a' to="/login">Login</Link>
            }
        </div>

    </nav>;
}