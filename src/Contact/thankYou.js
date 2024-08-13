import React from 'react';
import './Contact.css';
import LinkedInIcon from './LinkedIn.svg';
import InstagramIncon from './Instagram.svg';
import TikTokIcon from './TikTok.svg';
import FacebookIcon from './Facebook.svg';


const ThankYouDiv = () => {

    return (
        <div className='Contact ThankYou'>
            <h3>
                Thanks for submitting a form.
                <br/> 
                Someone from our team will be in contact shortly!
            </h3>
            <p>In the meantime, follow along with us on socials:</p>
            <div className='social-icons'>
                <img
                    src={LinkedInIcon}
                    alt='LinkedIn'
                />
                <img
                    src={InstagramIncon}
                    alt='Instagram'
                />
                <img
                    src={TikTokIcon}
                    alt='TikTok'
                />
                <img
                    src={FacebookIcon}
                    alt='Facebook'
                />
            </div>
        </div>
    )

};

export default ThankYouDiv;