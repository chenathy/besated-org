import React from 'react';
import './Footer.css';
import Logo from './Bestated.ai.svg';
import LinkedIn from './LinkedIn.svg';
import Instagram from './Instagram.svg';
import TikTok from './TikTok.svg';
import Facebook from './Facebook.svg';


const Footer = () => {
    return (
        <footer className='footer'>
            <hr/>
            <div className='main'>
                <img
                    src={Logo}
                    alt='Logo'
                />

                <div className='menu'>
                    <div>
                        <p>For employers</p>
                        <p>For attorneys</p>
                        <p>For financial advisors</p>
                    </div>
                    <div>
                        <p>About</p>
                        <p>Get in contact</p>
                        <p></p>
                    </div>
                </div>

                <div className='social'>
                    <img
                        src={LinkedIn}
                        alt='LinkedIn'
                    />
                    <img
                        src={Instagram}
                        alt='Instagram'
                    />
                    <img
                        src={TikTok}
                        alt='TikTok'
                    />
                    <img
                        src={Facebook}
                        alt='Facebook'
                    />
                </div>

            </div>

            <div className='copyright'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Copyright &copy;  Bestated, LLC {new Date().getFullYear()}</p>
            </div>

        </footer>
    )
};

export default Footer;

