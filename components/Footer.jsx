
import React from "react";
import Logo from "../assets/Library.svg"
import Link  from "next/link";
import Image from "next/image";

const Footer = () => {
    return(
<footer>
    <div className="container">
        <div className="row row__column">
            <Link href="/">
                <figure className="footer__logo">
                    <Image src={Logo} alt="" className="footer__logo--img" />
                </figure>
            </Link>
            <div className="footer__list">
                <Link href="/" className="footer__link">Home</Link>
                <span className="footer__link no-cursor">About</span>
                <Link href="/books" className="footer__link">Books</Link>
                <Link href="/cart" className="footer__link">Cart</Link>
            </div>
            <div className="footer__copyright">
                Copyright &copy; 2025 Library
            </div>

        </div>
    </div>
</footer>

    )
}

export default Footer;