import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pic1 from './Pic1.png';
import arrow from './noun-arrow.svg'

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div className='HomePage'>

            <div className='Hero'>
                <div className='Text-Btn'>
                    <h1>Help your employees avoid the painful probate process.</h1>
                    <h4>Bestated is the first employer-sponsored will, power of attorneys, and medical drective platform.</h4>
                    <div className='btn'>
                        <button className='contact-btn'>Get in contact</button>
                        <button className='about-btn'>About us</button>
                    </div>
                </div>

                <div className='Pic'>
                    <img 
                        src={Pic1} 
                        alt='HomePageLogo1' 
                        className='Pic' 
                    />
                </div>

            </div>

            <hr/>

            <div className='Numbers'>
                <div className='Number'>
                    <h1>67%</h1>
                    <p>of US adults don't have a will</p>
                </div>
                <div className='Number'>
                    <h1>72%</h1>
                    <p>of minority adults don’t have a will</p>
                </div>
                <div className='Number'>
                    <h1>80%</h1>
                    <p>of people under 30 don’t have a will</p>
                </div>

            </div>

            <hr/>

            <div className='Wills'>
                <img 
                    src={arrow} 
                    alt='Arrow' 
                    className='Pic'
                />

                <div className='Box'></div>
                
            </div>
    
        </div>

    )

};


export default HomePage;
