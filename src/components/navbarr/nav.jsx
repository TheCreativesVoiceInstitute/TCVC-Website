import './nav.css'
import { useRef } from "react";
import LumaCheckoutButton from '../registration-btn/button';
// import { FaTimes } from "react-icons/fa";
function Nav() {
    const eventId = 'evt-Uz3U3cUGvUcOqLq';

    const navRef = useRef();
    // shows nav when nav-open button is clicked
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    // hides nav when an item is clicked
    const hideNavbar = () => {
        navRef.current.classList.remove(
            "responsive_nav"
        );
    };

    return (
        <>
            <nav className="navbar">
                <div> <img className="logo" src="./tcvc-logo.svg"  alt="lazy loaded logo" /></div>
                <div className="nav-lists" ref={navRef} >
                    {/* <p onClick={hideNavbar}>About Us</p>
                    <p onClick={hideNavbar} className='events'>Events</p> */}
                    {/* <button onClick={hideNavbar} className='register-btn'>Register for Event <img className='arrow' src="./white-arrow.svg" alt="arrow" /> </button> */}
                    <div>
                        <LumaCheckoutButton eventId={eventId} className="register-btn" onClick={hideNavbar}  >
                            Register for Event
                            <img className='arrow' src="./white-arrow.svg" alt="arrow" />
                        </LumaCheckoutButton>
                        <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
                    </div>
                    {/* <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <img src="./white-arrow.svg" alt="arrow" loading='lazy' />
                    </button> */}

                </div>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                        <LumaCheckoutButton eventId={eventId}>
                        <img src="./white-arrow.svg" alt="arrow" loading='lazy' />
                        </LumaCheckoutButton>
                        <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
                </button>
                
            </nav>
        </>
    )
}
export default Nav