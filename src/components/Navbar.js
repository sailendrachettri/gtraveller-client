import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("current_user");
        navigate("/login");
    }

    useEffect(() => {
        const fetchUser = () =>{
            let URL = "http:localhost:5000/api/auth/fetchuser"; 
            const response = fetch(URL);
            const userinfo = response.json();
            console.log(userinfo);            
        }
    }, [])
    

    return (
        <header>
            <div className="logo">TRAVELLERS</div>
            <nav className={`nav-items ${open ? 'open-menu' : ''}`}>
                <ul>
                    <li><Link to="/#top-destinations">Places</Link></li>
                    <li><Link to="/#ratings">Review</Link></li>
                    <li><Link to="/#contact-form">Contact</Link></li>
                    {/* If the token is there then show logout btn else show login and register */}
                    {!localStorage.getItem('auth_token') ? <div style={{ display: "flex" }}>
                        <li><Link className="nav-auth-btn" to="/register">Register</Link></li>
                        <li><Link className="nav-auth-btn active" to="/login">Login</Link></li>
                    </div>
                        : <div style={{display: "flex"}}>
                            <li><Link to="#" className="nav-auth-btn"  onClick={handleLogout}>Logout</Link></li>
                            <li id="current-user">Welcome, <span className="username"> {`@${localStorage.getItem("current_user")? localStorage.getItem("current_user") : "Guest"}`}</span></li>
                        </div>}
                </ul>
            </nav>
            <div className={`action ${open ? 'open-menu' : ''}`}>
                <div className="call-to-action">
                    <span className="material-symbols-outlined">chat</span>
                    <a href="tel:9832795894"><button>Talk with Advisor</button></a>
                </div>
                <div className="call-to-action2">
                    <p><span className="material-symbols-outlined">call</span> <span className="phone-number">988-3083-0064</span></p>
                    <p>Book your tour right away</p>
                </div>
            </div>
            <div className={`hamburger ${open ? 'open-menu' : ''}`} onClick={openMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
}
