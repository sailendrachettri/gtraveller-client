import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { environment } from "../environment";

export default function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    function onChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let URL = "http://localhost:5000"; // default is local

        if(environment === 'prod')
            URL = "https://gtraveller-server.onrender.com";
        
        console.log(URL)

        const { username, password } = credentials;

        try {
            const response = await fetch(`${URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })

            const data = await response.json();
            console.log(data)


            if (data.success) {
                // save the auth-token and redirect
                localStorage.setItem('auth_token', data.auth_token); 
                localStorage.setItem('current_user', data.username); 

                console.log(localStorage.getItem('auth_token'));
                console.log(localStorage.getItem('current_user'));
                alert("Logged in successfully!");
                navigate("/");

            } else {
                alert(data.message);
            }

        } catch (error) {
            alert("Internal server error. Please try again later.");
        }
    }

    return (
        <>
            <form className='login-signup-form' onSubmit={handleSubmit}>
                <h1>Welcome Back</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={credentials.username} onChange={onChange} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} required />

                    <button type='submit'>Login</button>

                    <p>Don't have an account yet? <Link to="/register"> Register </Link></p>
                </div>
            </form>
        </>
    )
}