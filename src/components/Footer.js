import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    useEffect(() => {
        let footerYear = document.getElementById("year");
        let date = new Date();

        footerYear.innerText = date.getFullYear();
    }, [])


    return (
        <footer>
            <div className="footer-content">
                <div className="contact-info">
                    <h1>Contact Info</h1>
                    <p>Tadong, Gangtok Sikkim</p>
                    <p>+91 983-2795-894 | 709-0303-134</p>
                    <Link to="mailto:sailendra9083@gmail.com">
                        <p>sailendra9083@gmail.com</p>
                    </Link>
                    <p>&nbsp;</p>
                </div>

                <div className="about-company">
                    <h1>Company</h1>

                    <Link to="/company">
                        <p>About Us</p>
                    </Link>
                    <Link to="/terms" >
                        <p>Terms & Condition</p>
                    </Link>
                    <Link to="/disclaimer" >
                        <p>Disclaimer</p>
                    </Link>
                    <Link to="/refund" >
                        <p>Refund Policy</p>
                    </Link>
                </div>

                <div className="social-handles">
                    <h1>Social Handles</h1>
                    <p>Follow us on</p>
                    <Link to="#"><img src="./imgs/Icons/facebook.png" alt="Facebook" /> </Link>
                    <Link to="#"><img src="./imgs/Icons/instagram.png" alt="Instagram" /> </Link>
                    <Link to="#"><img src="./imgs/Icons/twitter.png" alt="Twitter" /> </Link>
                    <Link to="#"><img src="./imgs/Icons/youtube.png" alt="Youtube" /> </Link>
                    <p>&nbsp;</p>
                </div>
            </div>
            <div className="footer-line">
                Copyright &copy; <span id="year">0000</span> All rights reserved
            </div>
        </footer>
    );
}