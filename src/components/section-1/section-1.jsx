import './section-1.css';
import LumaCheckoutButton from '../registration-btn/button';

function Section1() {
    const eventId = 'evt-Uz3U3cUGvUcOqLq';
    return (
        <>
            <section className='section-1'>
                <h1 className='checkout'>Check out some of our partners</h1>
                <div className='partners'>
                    <div></div>
                    <div ></div>
                    <div></div>
                    <div></div>
                    <div> </div>
                    <div></div>
                    {/* <div></div>
                    <div></div>
                    <div></div>
                    <div></div> */}
                </div>
                <h1 className='checkout'>Any of this sound familiar?</h1>
                {/* <p className='loren-sec-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p> */}
                <div className='blt-pt'>
                    <h4> <img src="./Arrow - Right 3.svg" alt="" />All your friends are into fraud, so it feels like that’s the only way.</h4>
                    <h4 className='blt-pt-h4'> <img src="./Arrow - Right 3.svg" alt="" /> You have no job or work that’s bringing you enough money for your daily needs.</h4>
                    <h4> <img src="./Arrow - Right 3.svg" alt="" />You are in need of mentorship and guidance on what  skill learn.</h4>
                    <h4> <img src="./Arrow - Right 3.svg" alt="" />You have a skill but you’re stuck on what to do to make money from it.</h4>
                    <h4> <img src="./Arrow - Right 3.svg" alt="" />You feel like you’re not competent enough to create the change you want.</h4>
                    {/* <h4> <img src="./Arrow - Right 3.svg" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h4> */}
                </div>
                <h5 className='if-so'>If so, just know we’ve been there and you are not alone...</h5>
                {/* <button style={{ backgroundColor: '#9C53EA', border: 'none' }} className='section1-btn-sub'>Get your free ticket <img src="./Ticket Star.svg" alt="" /></button> */}
                <div>
                    <LumaCheckoutButton eventId={eventId} className="section1-btn-sub  hero-btn-sub-1"  >
                        Get your free ticket
                        <img src="./Ticket Star.svg" alt="" />
                    </LumaCheckoutButton>
                    <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
                </div>
                <h1 className='section1-which'>Which is why we are bringing The Creatives’ Voice Conference to you</h1>
                <div className='what-is-box'>
                    <img className='what-is-box-img' src="./Frame 8.svg" alt="" />
                    <div className='what-is-box-sub' >
                        <h3> What is "The Creatives’ Voice
                            Conference"</h3>
                        <h4>The Creatives' Voice Conference aims to empower youths with creative skills ( Content creation, Photography, Animation, Video editing, Voiceover, Podcasting etc.), industry insights, and business strategies to succeed in the creative industry. <br />
                         At the conference, you'll learn exactly how to implement this.</h4>
                    </div>
                </div>
                <div className='what-is-box-2'>
                    <img className='what-is-box-img' src="./Frame 18.svg" alt="" />
                    <div className='what-is-box-sub'>
                        <h3>What is "The Creatives’ Voice
                            Institute”</h3>
                        <h4>The Creatives' Voice Institute is a brand that provides valuable knowledge in different areas of the creative industry. It's a platform where creatives can get everything they need to grow from the basics to achieving global success.</h4>
                    </div>
                </div>



            </section>
        </>
    )
}
export default Section1