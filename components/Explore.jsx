import Link from "next/link"
import React from "react"


const Explore = () => {

    return (
<section id="explore">
    <div className="container">
        <div className="row row__column">
            <h2>Explore more <span className="purple">Books</span></h2>
            <Link href="/books">
            <button className="btn">Explore books</button>
            </Link>
        </div>
    </div>
</section>

    )
}

export default Explore