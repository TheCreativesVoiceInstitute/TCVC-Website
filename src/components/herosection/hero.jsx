import './hero.css'
import Marquee from 'react-fast-marquee';
import LumaCheckoutButton from '../registration-btn/button'


function Herosection() {
    const eventId = 'evt-Uz3U3cUGvUcOqLq';
    return (
        <>
            <section className="hero">
                <div className='hero-cont'>
                    <h1 className="creatives-voice">The Creatives’ Voice
                        Conference’24</h1>
                    <h3 className='ignite'>Unlock your creative potential at The Creatives’ Voice Conference 2024 - TCVC’24. Explore new techniques, gain insights and unleash your artistic potential </h3>
                    <div className='hero-btn'>
                        {/* <button style={{backgroundColor:'#9C53EA', border:'none'}} className='hero-btn-sub'>Get your free ticket <img src="./Ticket Star.svg" alt="" /></button> */}
                        <div>
                            <LumaCheckoutButton eventId={eventId} className="hero-btn-sub  hero-btn-sub-1"  >
                                Get your free ticket
                                <img src="./Ticket Star.svg" alt="" />
                            </LumaCheckoutButton>
                            <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
                        </div>
                        <button style={{ border: '1px solid black', backgroundColor: 'rgba(0, 0, 0, 0)', color:'black' }} className='hero-btn-sub'>Watch Video <img src="./Video.svg" alt="" /></button>
                    </div>
                    <p className='hero-p'>Date: 30th November 2024</p>
                    <p className='hero-p'>Venue: ATB Tech Hub 22, ita-Agemo Ward 12,<br /> Igbehin, Abeokuta, Ogun State.</p>
                    {/* youtubevideo */}
                    <img className='img-2' src="./Frame 36774.svg" alt="image" />
                </div>
            </section>
            <img className='img-2b' src="./Frame 36774 1.svg" alt="image" />
            <div>
                    <Marquee className='marque2' direction="left" speed={100} delay={2} pauseOnHover={false} autoFill={true} loop={0}>
                        <div className='marque-sub2'><img src="./Ogun twitter Logo.svg" alt="" /></div>
                        <div className='marque-sub2'><img src="./IMG_4875.svg" alt="" /></div>
                        <div className='marque-sub2'><img src="./Brand-Identity-for-tECH-SUMMIT-OGUN-grey.svg" alt="" /></div>
                        <div className='marque-sub2'> <img src="./black-no-font.svg" alt="" /></div>
                        <div className='marque-sub2'> <img src="./All Green Logo.svg" alt="" /></div>
                    </Marquee> 
                </div>
        </>
    )
}
export default Herosection