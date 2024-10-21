import './section4.css';
import Marquee from 'react-fast-marquee';
import LumaCheckoutButton from '../registration-btn/button';
import { FaRegCopyright } from "react-icons/fa";

function Section4() {
    const eventId = 'evt-Uz3U3cUGvUcOqLq';
    return (
        <>
            <section className="section4">
                <div className='before-after-cont'>
                    <div style={{ backgroundColor: '#FCE7F1' }} className='before-after'>
                        <h4>Before TCVC</h4>
                        <p> <img src="./Close Square.svg" alt="" />You don’t know what creative skills to learn</p>
                        <p> <img src="./Close Square.svg" alt="" />You have skills but don’t know how to monetize it</p>
                        <p> <img src="./Close Square.svg" alt="" />You don’t know why you’re scared of putting out contents</p>
                        <p> <img src="./Close Square.svg" alt="" />You’re all alone in your journey</p>
                        <p> <img src="./Close Square.svg" alt="" />You’re making money but it doesn’t feel like you’re making money</p>
                        <p> <img src="./Close Square.svg" alt="" />You always think your work is not good enough</p>
                        <p> <img src="./Close Square.svg" alt="" />You feel like Yahoo is the way cos your friends are into it</p>
                        <p> <img src="./Close Square.svg" alt="" />You don’t know what to do to change your life</p>
                    </div>
                    <div style={{ backgroundColor: '#F2EAFD' }} className='before-after'>
                        <h4>After TCVC</h4>
                        <p> <img src="./Tick Square.svg" alt="" />You now have clarity on the right creative skills to focus on</p>
                        <p> <img src="./Tick Square.svg" alt="" />You now know what you need to do to start getting jobs</p>
                        <p> <img src="./Tick Square.svg" alt="" />Now confident and creating contents that converts to sales</p>
                        <p> <img src="./Tick Square.svg" alt="" />Access to community of creatives, to build projects together</p>
                        <p> <img src="./Tick Square.svg" alt="" />Become financially literate</p>
                        <p> <img src="./Tick Square.svg" alt="" />Now speaking on global stages as a result of your creative skill</p>
                        <p> <img src="./Tick Square.svg" alt="" />You now have endless opportunities to tap from</p>
                        <p> <img src="./Tick Square.svg" alt="" />You know what to do to transform your life</p>
                    </div>
                </div>

                <div>
                    <Marquee className='marque' direction="left" speed={100} delay={2} pauseOnHover={false} autoFill={true} loop={0}>
                        <div className='marque-sub'>Marketing <img src="./rectangle.svg" alt="" /></div>
                        <div className='marque-sub'> Creativity <img src="Star 1.svg" alt="" /></div>
                        <div className='marque-sub'>Marketing <img src="./rectangle.svg" alt="" /></div>
                        <div className='marque-sub'>Engagment <img src="Star 1.svg" alt="" /></div>
                    </Marquee>
                </div>

                <div className='sml-mgn'>
                    <h1 className='check-out-some'>Check out some of the questions
                        people are asking</h1>
                    <p className='small-txt'>We have answers to some of your questions.</p>

                    <div className="faq-content">
                        <details>
                            <summary>
                                Do I have to pay to attend this event?
                            </summary>
                            <p className="summary-p">
                                No, it's totally free, no strings attached.
                            </p>
                        </details>
                        <details>
                            <summary>
                                Where is the event holding?
                            </summary>
                            <p className="summary-p">
                                The event is happening at Abeokuta, Ogun state.
                            </p>
                        </details>
                        <details>
                            <summary>
                                Is there a community where I can ask questions regarding the conference?
                            </summary>
                            <p className="summary-p">
                                Yes, a link to yhe community will be sent to your email as soon as you complete your registration.
                            </p>
                        </details>
                        <details>
                            <summary>
                                When is the event happening?
                            </summary>
                            <p className="summary-p">
                                The event is happening on November 16th at the ATB Techhub Abeokuta.
                            </p>
                        </details>
                        <details>
                            <summary>
                                Can I attend the event even though I'm a newbie in the creative industry?
                            </summary>
                            <p className="summary-p">
                                Yes, the conference is for everyone, either you are new to the creative industry, or you are already a professional.
                            </p>
                        </details>
                        {/* <details>
                            <summary>
                                Lorem Ipsum
                            </summary>
                            <p className="summary-p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolore tempora ab ea neque, quasi possimus a laboriosam facilis praesentium
                            </p>
                        </details> */}
                    </div>

                </div>
                <div className='sml-mgn'>
                <div className='purple-blob'>
                    <h1>Save your spot</h1>
                    <p className='gain'>Gain Invaluable insights from industry leaders at TCVC</p>
                    <div>
                        <LumaCheckoutButton eventId={eventId} className="hero-btn-sub  hero-btn-sub-1"  >
                            Get your free ticket
                            <img src="./Ticket Star.svg" alt="" />
                        </LumaCheckoutButton>
                        <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
                    </div>
                    <p className='d-and-v-1   d-and-v'>Date: 16th November 2024</p>
                    <p className='d-and-v'>Venue: ATB Tech Hub, Abeokuta</p>
                </div>
                </div>

                <div className='footer'>
                    <p> <FaRegCopyright />THE CREATIVES' VOICE CONFERENCE 2024</p>
                </div>
            </section>
        </>
    )
}
export default Section4