import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="box">
                    <h1>GANGTOK TRAVELLERS</h1>
                    <p>Explore the beauty of Sikkim</p>

                    <div className="inputfield-btn">
                        <input type="text" placeholder="Places in Sikkim" />
                        <Link to="/#top-destinations"> <button>Explore</button> </Link>
                    </div>
                </div>
                <Link to="/#top-destinations">
                    <span className="material-symbols-outlined" id="scroll-down"> stat_minus_2 </span>
                </Link>
            </div></>
    )
}