import { useState } from "react"
import { environment } from "../environment";
import { toast } from "react-toastify";


export default function Contact() {
    // state variables
    const [credentials, setCredentials] = useState({ email: "", phone: "", firstname: "", lastname: "", message: "" })
    const [isloading, setIsloading] = useState("Submit");

    // methods
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleLoading = () =>{
        if(credentials.email && credentials.message && credentials.phone && credentials.firstname)
            setIsloading("Please wait...");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let URL = "http://localhost:5000"; // default is local
        
        if (environment === 'prod')
            URL = "https://gtraveller-server.onrender.com";

        const { firstname, lastname, email, phone, message } = credentials;

        try{

        
        const response = await fetch(`${URL}/api/auth/contact`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname, email, phone, message })
        });

        const json = await response.json();

        if (json.success) {
            toast.success(`Thank you ${firstname} for contacting us. You'll get your response in few moments.`)
            setCredentials({ email: "", phone: "", firstname: "", lastname: "", message: "" })
            setIsloading("Submit")

        } else {
            toast.error(json.message)
            setIsloading("Submit")
        }
    } catch(err){
        setIsloading("Submit");
        toast.error("Internal server error. Please try again later.");
    }
    }

    return (
        <>
            <div className="contact-form" id="contact-form">
                <div className="icon-and-header">
                    <span className="material-symbols-outlined">contact_support</span>
                    <h1>Contact Us</h1>
                </div>

                <form id="form" onSubmit={handleSubmit}>
                    <div className="user-info">
                        <div className="details">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstname" value={credentials.firstname} onChange={onChange} minLength={3} required />

                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="lastname" value={credentials.lastname} onChange={onChange} />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} required />

                            <label htmlFor="number">Phone</label>
                            <input type="number" id="number" name="phone" value={credentials.phone} onChange={onChange} required />
                        </div>

                        <div className="msg-box">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="8" value={credentials.message} onChange={onChange}></textarea>
                        </div>
                    </div>
                    <button type="submit" onClick={handleLoading}>{isloading}</button>
                </form>
            </div>
        </>
    )
}