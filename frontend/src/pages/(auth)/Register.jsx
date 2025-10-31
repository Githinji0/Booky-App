import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Register = () => {
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [Password, setPassword] = useState("")

    const createUser = async () => { }
    return (
        <div className="box">
            <h1>Register</h1>
            <form action="" method="POST">
                <input type="text" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="first name.." value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} />
                <input type="text" placeholder="last name.." value={userLastName} onChange={(e) => setUserLastName(e.target.value)} />
                <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={() => createUser()}>Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    )
}

export default Register