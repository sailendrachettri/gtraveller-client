export default function Galarrey() {
    return (
        <><div className="popular-places-preview">
            <div className="icon-and-header">
                <span className="material-symbols-outlined">home_pin</span>
                <h1>Explore the Nature</h1>
            </div>
            <div className="locations-cards">
                <div className="locations-card">
                    <img src="./imgs/carousel/mountains.jpg" alt="Mountains" />
                    <h2>Get the view of refreshing mountains</h2>
                </div>
                <div className="locations-card">
                    <img src="./imgs/carousel/roads.jpg" alt="roads" />
                    <h2>Fly like a birds and ride like a rider</h2>
                </div>
                <div className="locations-card">
                    <img src="./imgs/carousel/beach.jpg" alt="Beach" />
                    <h2>Explore the beauty of a river and lakes</h2>
                </div>
                <div className="locations-card">
                    <img src="./imgs/carousel/travelSikkim.jpg" alt="Travel" />
                    <h2>Travel the sikkim to feel alive again</h2>
                </div>
            </div>
        </div></>
    )
}