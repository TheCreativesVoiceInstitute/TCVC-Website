import './section2.css';
import LumaCheckoutButton from '../registration-btn/button';

function Section2() {
    const eventId = 'evt-Uz3U3cUGvUcOqLq';
    return (
        <>
            <section className='section-2'>
                <h1 className='check-out-some'>Check out some of the topics we’ll cover at this event</h1>
                <div className='grid-cont'>
                    <div className='grid-elements'>
                        <img src="./grid-img-1.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5>Voiceover Artistry</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                    <div className='grid-elements'>
                        <img src="./grid-img-2.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5>Animation</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                    <div className='grid-elements'>
                        <img src="./grid-img-3.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5>Content Creation</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                    <div className='grid-elements'>
                        <img src="./grid-img-4.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5>Video Editing</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                    <div className='grid-elements'>
                        <img src="./grid-img-5.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5>Podcasting</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                    <div className='grid-elements'>
                        <img src="./grid-img-6.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5> Financial</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                    <div className='grid-elements'>
                        <img src="./grid-img-7.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5>Social Media Optimisation</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                    <div className='grid-elements'>
                        <img src="./grid-img-8.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5>Sales and Marketing</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                    <div className='grid-elements'>
                        <img src="./grid-img-9.svg" alt="" />
                        <div className='grid-element-sub'>
                            <h5>Nation Building</h5>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt.</p> */}
                        </div>
                    </div>
                </div>

                <div className='section2-btn'>
                    <LumaCheckoutButton eventId={eventId} className="section1-btn-sub  hero-btn-sub-1"  >
                        Get your free ticket
                        <img src="./Ticket Star.svg" alt="" />
                    </LumaCheckoutButton>
                    <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
                </div>
            </section>
            <div className='bg-speaker'>
                <h1 className='check-out-some'>Here’s our lineup of amazing speakers</h1>
                <p className='learn-from'>Learn from top industry leaders accross different niches</p>
                <div className='grid-2'>
                    <div>
                        <img className='grid-2-img' src="./img-15.svg" alt="" />
                        <h5 className='grid-2-h5'>Comfort Olofin</h5>
                        <h6 className='grid2-h6'>Convener</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-0.svg" alt="" />
                        <h5 className='grid-2-h5'>Daniel Emah</h5>
                        <h6 className='grid2-h6'>Designer/Nation Builder</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-1.svg" alt="" />
                        <h5 className='grid-2-h5'>Tolulope Kolade(Tcode)</h5>
                        <h6 className='grid2-h6'>Founder Voice Verse, Voice actor,
                            Podcaster</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-2.svg" alt="" />
                        <h5 className='grid-2-h5'>Bruno Nwogu</h5>
                        <h6 className='grid2-h6'>The Einstein Of Marketing</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-3.svg" alt="" />
                        <h5 className='grid-2-h5'> Ayodele Elegba</h5>
                        <h6 className='grid2-h6'>Founder / MD : Spoof Animation</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-7.svg" alt="" />
                        <h5 className='grid-2-h5'>Director Stone</h5>
                        <h6 className='grid2-h6'>Director & Editor, HO3 Media</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-4.svg" alt="" />
                        <h5 className='grid-2-h5'> Solarspeaks</h5>
                        <h6 className='grid2-h6'>Spokenword Poet</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-5.svg" alt="" />
                        <h5 className='grid-2-h5'>Dr Emmanuel Abayomi</h5>
                        <h6 className='grid2-h6'>Psychiatrist & Psychotherapist @
                            Psychesed</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-6.svg" alt="" />
                        <h5 className='grid-2-h5'>King E. Afemikhe</h5>
                        <h6 className='grid2-h6'>Founder, Voiceover Workshop & Media, Convener, the Voiceover Conference</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-10.svg" alt="" />
                        <h5 className='grid-2-h5'>Oluwaseun Hamzat</h5>
                        <h6 className='grid2-h6'>Technology & Strategy Consultant</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-9.svg" alt="" />
                        <h5 className='grid-2-h5'>Uche Aguocha</h5>
                        <h6 className='grid2-h6'>Personal Finance & Business
                            Coach</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-8.svg" alt="" />
                        <h5 className='grid-2-h5'>Oluwapelumi O.Awoyale</h5>
                        <h6 className='grid2-h6'>Legal Professional & Creative</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-13.svg" alt="" />
                        <h5 className='grid-2-h5'>Naomi Ojeh</h5>
                        <h6 className='grid2-h6'>Content Strategist & Media
                            Personality</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-12.svg" alt="" />
                        <h5 className='grid-2-h5'>Kayode Ayomide</h5>
                        <h6 className='grid2-h6'>Technology & Strategy Consultant</h6>
                    </div>
                    <div>
                        <img className='grid-2-img' src="./img-14.svg" alt="" />
                        <h5 className='grid-2-h5'>Samson Odegbami</h5>
                        <h6 className='grid2-h6'>Life Coach/Business Development
                            Expert</h6>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Section2