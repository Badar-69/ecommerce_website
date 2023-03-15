import React from 'react'
import logo from '../images/logo.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footerlogo">
                    <img src={logo} alt="logo" />
                    <p>&copy; 2023 Flone.<br />All Rights Reserved</p>
                </div>
                <div className="footerabout">
                    <p className='footerheading'>About Us</p>
                    <p>About Us</p>
                    <p>share location</p>
                    <p>Contact</p>
                    <p>Orders Tracking</p>
                </div>
                <div className="footerlink">
                    <p className='footerheading'>Useful LInks</p>
                    <p>Returns</p>
                    <p>Support Policy</p>
                    <p>Size Guide</p>
                    <p>F.A.Qs</p>
                </div>
                <div className="footerfollow">
                    <p className='footerheading'>Follow Us</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instragram</p>
                    <p>Youtube</p>
                </div>
                <div className="footersubscribe">
                    <p className='footerheading'>Subscribe</p>
                    <p>Get Email updates about our latest shop<br />And special offers.</p>
                    {/* <label htmlFor="">Enter your Email address...</label> */}
                    <input type="email" placeholder='Enter Your Email address...' />
                    <a href="/">SUBSCRIBE</a>
                </div>
            </footer>
        </>
    )
}
