import React from "react";
import  UndrawBooks  from "../assets/Undraw_Books.svg"; 
import Link from "next/link";
import Image from "next/image";



const Landing = () => {
    return(

        <section>
            <div className="header__container">
                <div className="header__description">
                    <h1>America&apos;s most awarded online library platform</h1>
                    <h2>Find your dream book with <span className="purple">Library</span></h2>
                    <Link href="#features">
                        <button className="btn">Browse books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <Image src={UndrawBooks} alt="" />
                </figure>
            </div>
        </section>
    )
}
export default Landing;