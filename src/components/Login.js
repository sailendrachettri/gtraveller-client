import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    function onChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const URL = 'http://localhost:5000/api/auth/login';
        const { username, password } = credentials;

        try {
            const response = await fetch(URL, {
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
                localStorage.setItem('token', data.authToken);
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