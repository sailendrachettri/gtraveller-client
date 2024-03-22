import { useState } from "react"

export default function Registration() {
    // state variables
    const [credentials, setCredentials] = useState({email:"", phone : "", firstname: "", lastname: "", message : ""})

    // methods
    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name] : e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const {firstname, lastname, email, phone, message} = credentials;

        const response = await fetch("http://localhost:5000/", {    
            method :'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({firstname, lastname, email, phone, message})
        });

        const json = await response.json();
        
        if(json.success){            
            alert(`Thank you ${firstname} for registration`);
            setCredentials({email:"", phone : "", firstname: "", lastname: "", message : ""})
            
            
        } else{
            alert(json.message);
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
                            <input type="text" id="first-name" name="firstname" value={credentials.firstname} onChange={onChange} minLength={3}  required />

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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}