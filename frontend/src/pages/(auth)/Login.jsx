import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Register from './Register';
 const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("");
    const loginUser = async () => { }
    return (
        <div className="box">
            <h1>Login</h1>
            <form action="" method="POST" className='form-box'>
                <input type="text" placeholder="Username.." value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={() => loginUser()}>Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>

        </div>
    )

}
export default Login