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

                <h1 className='check-out-some'>Here’s our lineup of amazing speakers</h1>
                <p className='learn-from'>Learn from top industry leaders accross different niches</p>
                <div className='grid-2'>
                    <div>
                        <img className='grid-2-img' src="./Group 16_preview_rev_1 1.svg" alt="" />
                        {/* <h5  className='grid-2-h5'>Bolaji Kolapo</h5> */}
                    </div>
                    <div>
                        <img className='grid-2-img' src="./Group 16_preview_rev_1 1.svg" alt="" />
                        {/* <h5  className='grid-2-h5'>Ikechukwu Ibe</h5> */}
                    </div>
                    <div>
                        <img className='grid-2-img' src="./Group 16_preview_rev_1 1.svg" alt="" />
                        {/* <h5 className='grid-2-h5'>Ibim Okujagu</h5> */}
                    </div>
                    <div>
                        <img className='grid-2-img' src="./Group 16_preview_rev_1 1.svg" alt="" />
                        {/* <h5 className='grid-2-h5'>Funke Olowookere</h5> */}
                    </div>
                </div>

            </section>
        </>
    )
}
export default Section2