import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    };

    return (
        <header>
            <div className="logo">TRAVELLERS</div>
            <nav className={`nav-items ${open ? 'open-menu' : ''}`}>
                <ul>
                    <li><Link to="/#top-destinations">Places</Link></li>
                    <li><Link to="/#ratings">Review</Link></li>
                    <li><Link to="/#contact-form">Contact</Link></li>
                    <li><Link to="/company">Company</Link></li>
                    <li><Link to="/#qna">QnA</Link></li>
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
