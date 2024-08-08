import React from 'react';
import './Employers.css';
import Hero from './HeroImage.svg';
import AttractIcon from './Icon_Attract.svg';
import LoyaltyIcon from './Icon_Loyalty.svg';
import Productivity from './Icon_Productivity.svg';



const ForEmployers = () => {
    return(
        <div className='Employers'>
            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Protect your employees if the worst comes to be.</h1>
                    <h4>With Bestated, add employer-sponsored wills to your benefits package.</h4>
                    <div className='btn'>
                        <button className='contact-btn'>Get in contact</button>
                    </div>
                </div>

                <img 
                    src={Hero} 
                    alt='EmployerHero'
                />
            </div>

            <div className='Benefits'>
                <h2>Why consider employer-sponsored wills?</h2>

                <div className='benefits'>
                    <div className='benefit'>
                        <img
                            src={AttractIcon}
                            alt='AttractIcon'
                        />
                        <div className='text'>
                            <h4>Attract top talent</h4>
                            <p>
                                Leading companies must stay on the cutting edge of the benefits landscape. 
                                Expand your reputation as a forward-thinking employer to attract and retain the highest-quality candidates.
                            </p>
                        </div>
                    </div>

                    <div className='benefit'>
                        <img
                            src={LoyaltyIcon}
                            alt='LoyaltyIcon'
                        />
                        <div className='text'>
                            <h4>Employee loyalty</h4>
                            <p>
                                Demonstrate your company’s commitment to supporting your employees and their families, and increase retention rates. 
                                This reduces the high cost of employee turnover.
                            </p>
                        </div>
                    </div >

                    <div className='benefit'>
                        <img
                            src={Productivity}
                            alt='Productivity'
                        />
                        <div className='text'>
                            <h4>Enhanced productivity</h4>
                            <p>
                                People who are less stressed in their personal lives can be more present when at work. 
                                Boost productivity by adding to your employees’ sense of work-life balance.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        </div>
    )
};

export default ForEmployers;