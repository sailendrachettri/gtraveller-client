import { Link } from "react-router-dom"

export default function Topdestination() {
    return (
        <>
            <div className="destinations" id="top-destinations">
                <div className="icon-and-header">
                    <span className="material-symbols-outlined">location_on</span>
                    <h1>Top Attractions in Sikkim</h1>
                </div>
                <div className="locations-cards">
                    <div className="locations-card">
                        <img src="./imgs/destination/pelling.jpg" alt="Pelling" />
                        <h2>PELLING</h2>
                        <p>Package starting at <strong> ₹6999 </strong></p>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                        </Link>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                            <button>Book Now</button>
                        </Link>

                    </div>
                    <div className="locations-card">
                        <img src="./imgs/destination/lachung.jpg" alt="lachung" />
                        <h2>LACHUNG</h2>
                        <p>Package starting at <strong> ₹8999 </strong></p>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                            <button>Book Now</button> </Link>
                    </div>
                    <div className="locations-card">
                        <img src="./imgs/destination/chardham.jpg" alt="char dham namchi" />
                        <h2>CHAR DHAM</h2>
                        <p>Package starting at <strong> ₹4999 </strong></p>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                            <button>Book Now</button> </Link>
                    </div>
                    <div className="locations-card">
                        <img src="./imgs/destination/nathula.jpg" alt="Nathula" />
                        <h2>NATHULA</h2>
                        <p>Package starting at <strong> ₹9999 </strong></p>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                            <button>Book Now</button> </Link>
                    </div>
                    <div className="locations-card">
                        <img src="./imgs/destination/hanuman-tok.jpg" alt="Hanuman tok" />
                        <h2>HANUMAN TOK</h2>
                        <p>Package starting at <strong> ₹2999 </strong></p>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                            <button>Book Now</button> </Link>
                    </div>
                    <div className="locations-card">
                        <img src="./imgs/destination/rankamonestry.jpg" alt="Ranka monastery" />
                        <h2>RANKA MONASTERY</h2>
                        <p>Package starting at <strong> ₹1999 </strong></p>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                            <button>Book Now</button> </Link>
                    </div>
                    <div className="locations-card">
                        <img src="./imgs/destination/banjhakri.jpg" alt="banjhakri waterfalls" />
                        <h2>BANAJHAKRI WATER FALLS</h2>
                        <p>Package starting at <strong> ₹4999 </strong></p>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                            <button>Book Now</button> </Link>
                    </div>
                    <div className="locations-card">
                        <img src="./imgs/destination/buddhapark.jpg" alt="Buddha park" />
                        <h2>BUDDHA PARK</h2>
                        <p>Package starting at <strong> ₹5999 </strong></p>
                        <Link
                            to="https://wa.me/9832795894?text=Hi%20I%20am%20interested%20to%20book%20a%20tour%20with%20gangtok%20traveller.%20Please%20provide%20more%20information">
                            <button>Book Now</button> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}