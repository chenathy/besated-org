import React from 'react';
import './Attorneys.css';
import Hero from './Hero.png';


const ForAttorneys = () => {
    return (
        <div className='Attorneys'>

            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Let Bestated grow your business and help more clients.</h1>
                    <h4>Join Bestated’s two-sided marketplace to expand your client base. Let us do the hard work of lead generation!</h4>
                    <div className='btn'>
                        <button className='contact-btn'>Get in contact</button>
                    </div>
                </div>

                <img 
                    src={Hero} 
                    alt='EmployerHero'
                />
            </div>

        </div>
    )

};

export default ForAttorneys;