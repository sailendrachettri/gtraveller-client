import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { environment } from "../environment";
import { toast } from 'react-toastify';

export default function Register() {
    let navigate = useNavigate();

    // state variables
    const [credentials, setCredentials] = useState({ username: "", phone: "", cpassword: "", password: "" })
    const [loading, setLoading] = useState("Register");

    async function handleSubmit(e) {
        e.preventDefault();

        let URL = "http://localhost:5000"; // default is 

        if (environment === 'prod')
            URL = "https://gtraveller-server.onrender.com";

        const { username, password, cpassword, phone } = credentials;

        try {


            const response = await fetch(`${URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ username, password, cpassword, phone })
            })

            const data = await response.json();

            if (data.success) {
                toast.success(`Thank you ${username} for registration.`);

                localStorage.setItem("auth_token", data.auth_token);
                localStorage.setItem('current_user', data.username);

                setCredentials({ username: "", password: "", cpassword: "", phone: "" });
                navigate("/");

            } else {
                toast.error(data.message);
                setLoading("Register")
            }
        } catch (error){
            setLoading("Register")
            toast.error("Internal server error. Please try again later.");
        }
    }

    const handleOnchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleLoading = () => {
        // if user entered all the details then only show msg
        if (credentials.username && credentials.password && credentials.cpassword && credentials.phone)
            setLoading("Please wait...");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='login-signup-form'>
                <h1>Create an Account</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={credentials.username} onChange={handleOnchange} autoComplete='off' minLength={3} maxLength={12} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={credentials.password} onChange={handleOnchange} autoComplete='off' minLength={6} maxLength={25} required />

                    <label htmlFor="cpassword">Confirm Password:</label>
                    <input type="password" id="cpassword" name="cpassword" value={credentials.cpassword} autoComplete='off' onChange={handleOnchange} required />

                    <label htmlFor="phone">Phone:</label>
                    <input type="number" id="phone" name="phone" autoComplete='off' value={credentials.phone} onChange={handleOnchange} required />

                    <button type='submit' onClick={handleLoading} >{loading}</button>

                    <p>Already have account? <Link to="/login"> Login </Link></p>
                </div>
            </form>
        </>
    )
}