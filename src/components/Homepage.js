import Contact from "./Contact"
import Ratings from "./Ratings"
import Qna from "./Qna"
import Topdestination from "./Topdestingation"
import Galarrey from "./Galarrey"
import Hero from "./Hero"

export default function Homepage() {
    return (
        <>
            <Hero />
            <Galarrey />
            <Topdestination />
            <Contact />
            <Ratings />
            <Qna />
        </>
    )
}