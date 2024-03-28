import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    let navigate = useNavigate();
    // state variables
    const [credentials, setCredentials] = useState({ username: "", phone: "", cpassword: "", password: "" })

    async function handleSubmit(e) {
        e.preventDefault();

        const URL = 'http://localhost:5000/api/auth/register';
        const {username, password, cpassword, phone} = credentials;

        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({username, password, cpassword, phone})
        })

        const data = await response.json();

        if(data.success){
            localStorage.setItem("auth_token", data.auth_token);
            console.log(localStorage.getItem('auth_token'));
            alert(`Thank you for ${username} for registration.`);
            setCredentials({username: "", password: "", cpassword : "", phone : ""});
            navigate("/");

        } else {
            alert(data.message);
        }

    }

    const handleOnchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='login-signup-form'>
                <h1>Create an Account</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={credentials.username} onChange={handleOnchange} required />

                    <label htmlFor="password">Password:</label>
                     <input type="password" id="password" name="password" value={credentials.password} onChange={handleOnchange} required />

                    <label htmlFor="cpassword">Confirm Password:</label>
                    <input type="password" id="cpassword" name="cpassword" value={credentials.cpassword} autoComplete='off' onChange={handleOnchange} required />

                    <label htmlFor="phone">Phone:</label>
                    <input type="number" id="phone" name="phone" autoComplete='off' value={credentials.phone} onChange={handleOnchange} required />

                    <button type='submit'>Register</button>

                    <p>Already have account? <Link to="/login"> Login </Link></p>
                </div>
            </form>
        </>
    )
}