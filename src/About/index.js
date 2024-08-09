import React from 'react';
import './About.css';
import StoryIcon from './Story.png';


const About = () => {
    return (
        <div className='About'>
            
            <div className='Story'>
                <img
                    src={StoryIcon}
                    alt='About'
                />

                <div className='text-btn'>
                    

                </div>
            </div>
        </div>
    )
};

export default About;
