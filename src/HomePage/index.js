import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './HeroImage.svg';
import arrow from './noun-arrow.svg';
import Wills from './WillsImage.svg';

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div className='HomePage'>

            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Help your employees avoid the painful probate process.</h1>
                    <h4>Bestated is the first employer-sponsored will, power of attorneys, and medical drective platform.</h4>
                    <div className='btn'>
                        <button className='contact-btn'>Get in contact</button>
                        <button className='about-btn'>About us</button>
                    </div>
                </div>

                <img 
                    src={Hero} 
                    alt='HomePageLogo1'
                />

            </div>

            <hr/>

            <div className='Numbers'>
                <div className='number'>
                    <h1>67%</h1>
                    <p>of US adults don't have a will</p>
                </div>
                <div className='number'>
                    <h1>72%</h1>
                    <p>of minority adults don’t have a will</p>
                </div>
                <div className='number'>
                    <h1>80%</h1>
                    <p>of people under 30 don’t have a will</p>
                </div>

            </div>

            <hr/>

            <div className='Wills'>

                <div className='box box1'>

                    <div className='group'>
                        <label>THE PROBLEM</label>
                        <h2>Wills are complicated, expensive, and grim</h2>
                    </div>

                    <p>
                        Understandably, many avoid creating estate plans, wills, medical directives, and powers of attorney. 
                        <br/><br/>
                        As a result, families are left unprepared if worse comes to worst and there is an unexpected tragedy.
                    </p>

                    {/* <p id="link-learn-more">Learn more &gt;</p> */}
                    <a href='temp'>Learn more &gt;</a>
                </div>

                <div className='box box2'>
                    <div className='group'>
                        <label>OUR SOLUTION</label>
                        <h2>Employer-sponsored estate planning</h2>
                    </div>

                    <p>
                        Parental leave, disability, and life insurance were once novel employee benefits. 
                        We believe employer-sponsored estate planning documents should join them. 
                        <br/><br/>
                        Bestated uses AI, Large Language Models (LLMs), 
                        and attorney partners to reduce costs and increase accessibility for these complex legal needs.
                    </p>

                    <p id="link-learn-more">Learn more &gt;</p>

                </div>

                <img 
                    src={arrow} 
                    alt='Arrow' 
                    className='box pic'
                />

                <div className='callout-box'>
                    <div className='text-btn'>
                        <div className='group'>
                            <p>BENEFIT TO EMPLOYERS</p>
                            <h2>A unique benefit to attract and retain top talent</h2>
                        </div>
                        <p>Employer-sponsored wills provide your employees and their families with peace of mind, while keeping you competitive in today’s recruitment landscape.</p>
                        <button className='contact-btn'>Learn more</button>
                    </div>
                    
                    <img 
                        src={Wills} 
                        alt='HomePageLogo2'
                    />
                </div>
            </div>

        </div>

    )

};


export default HomePage;
