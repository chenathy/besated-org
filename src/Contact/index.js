import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import '../App.css';
import './Contact.css';
import FormDiv from './Form';
import ThankYouDiv from './thankYou';


const Contact = () => {

    return (
        <div className='Contact'>
            <FormDiv />
            <ThankYouDiv />
        </div>
    )
};

export default Contact;
