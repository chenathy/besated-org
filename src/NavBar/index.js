
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './bestated.ai.svg';
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    const handleClickContact = () => {
        navigate('/contact');
    };

    return (
        <nav className='navbar'>
            <Link to = '/'>
                <img 
                    src={logo} 
                    alt='BestatedLogo' 
                    className='logo' 
                />
            </Link>
            <div className='ul'>
                <ul>
                    <li><Link to='/employers'>For employers</Link></li>
                    <li><Link to='/professional'>For professional</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>
                        <button
                            onClick={handleClickContact}
                            className='contact-btn'
                        >
                            Get in contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;