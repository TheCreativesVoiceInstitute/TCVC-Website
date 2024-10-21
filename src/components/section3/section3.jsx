import './section3.css';
import LumaCheckoutButton from '../registration-btn/button';


function Section3() {
    const eventId = 'evt-Uz3U3cUGvUcOqLq';
    return (
        <>
            <section className='section3'>
                <h1 className='wondering-why'>Wondering why you should attend ?</h1>
                <div className='section-3-box'>
                    <img className='section3-img' src="./WhatsApp Image 2024-10-15 at 07.18.55_ec1afea0 1.svg" alt="" />
                    <div className='section-3-box-sub'>
                        <div className='why'>
                            <p className='why-no'>01.</p>
                            <p className='why-txt'>Learn sales and marketing strategy from top experts so you can monetize your skills effectively with expert training.</p>
                        </div>
                        <div className='why'>
                            <p className='why-no'>02.</p>
                            <p className='why-txt'>Learn the key things you need to know about content creation to help position you for  job opportunities and increase visibility</p>
                        </div>
                        <div  className='why'>
                            <p className='why-no'>03.</p>
                            <p className='why-txt'>Get guidance from industry experts in your niches so you know the right things to do and not be alone</p>
                        </div>
                        <div  className='why'>
                            <p className='why-no'>04.</p>
                            <p className='why-txt'>Discover who you are so you can manifest your potential and  become a global voice.</p>
                        </div>
                        <div  className='why'>
                            <p className='why-no'>05.</p>
                            <p className='why-txt'>Learn the core things you need to know to set up structures and systems for long-term wealth.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section3-b'>
              <h1 className='wondering-why-2'>Who is this for?</h1>
              <img className='frame2' src="./Frame 2.svg" alt="people-picture" />
              <ul className='ul-1'>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" /> Undergraduates </li>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" /> University aspirants</li>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" />NYSC corp members</li>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" />Animators</li>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" />Podcasters</li>
              </ul>
              <ul className='ul-1' >
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" />Voiceover Artistes</li>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" />Content creators</li>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" />Video editors</li>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" />Videographer</li>
                <li> <img src="./Arrow - Right Circle.svg" alt="arrow" />Photographers</li>
              </ul>
              <div className='section2-btn'>
                    <LumaCheckoutButton eventId={eventId} className="section1-btn-sub  hero-btn-sub-1"  >
                        Get your free ticket
                        <img src="./Ticket Star.svg" alt="" />
                    </LumaCheckoutButton>
                    <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
                </div>

            </section>
        </>
    )
}

export default Section3