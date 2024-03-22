
export default function Ratings() {
    return (
        <>
            <div className="ratings" id="ratings">
                <div className="icon-and-header">
                    <span className="material-symbols-outlined">reviews</span>
                    <h1>CUSTOMERS REVIEW</h1>
                </div>
                <div className="reviews">
                    <div className="review-box">
                        <img src="./imgs/avatars/dinosaur.png" alt="Sailendra" />
                        <p className="review">Gangtok Travellers Delivers! From start to finish, a well-organized and enjoyable
                            experience. Exceptional guides, top-notch accommodations, and memorable activities. Will
                            definitely book with them again.</p>
                        <div className="name-date">
                            <p className="name">Sailendra Chettri</p>
                            <p> 20 Feb 2024</p>
                        </div>
                    </div>

                    <div className="review-box">
                        <img src="./imgs/avatars/man.png" alt="Sailendra " />
                        <p className="review">Smooth Sailing with Gangtok Travellers! Impeccable planning, friendly staff, and
                            comfortable accommodations. The trip was a perfect blend of relaxation and exploration. Highly
                            recommend.</p>
                        <div className="name-date">
                            <p className="name">Suraj Rai</p>
                            <p> 19 Sep 2020</p>
                        </div>
                    </div>

                    <div className="review-box">
                        <img src="./imgs/avatars/avatar1.jpg" alt="Sailendra " />
                        <p className="review">Unforgettable Getaway! Gangtok Travellers crafted a dream vacation. Unique
                            itineraries, responsive customer service, and a perfect balance of adventure and relaxation.
                            Highly satisfied with this travel gem.</p>
                        <div className="name-date">
                            <p className="name">Neelam Karki</p>
                            <p> 21 Aug 2022</p>
                        </div>
                    </div>

                    <div className="review-box">
                        <img src="./imgs/avatars/avatar2.jpg" alt="Sailendra " />
                        <p className="review">Our trip with Gangtok Travellers was absolutely fantastic! Everything was so well
                            thought out, from the awesome guides to the comfy accommodations. Can't wait to plan another
                            adventure with them.</p>
                        <div className="name-date">
                            <p className="name">Topzer Sherpa</p>
                            <p> 10 july 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}