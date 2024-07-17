import React from 'react';
import { Form, ButtonToolbar, Button, Schema } from 'rsuite'; 
import { IoMdContact } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdNaturePeople } from "react-icons/md";
import { MdSavings } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import 'rsuite/dist/rsuite.min.css';
import '../App.css'
import familyLogo from './bestated_family.jpg'

const ContactPage = () =>{
    return (
        <div className='container'>
            <div className='content'>

            <img
                src={familyLogo}
                alt="Bestated Family"
                style={{ maxWidth: '60%', height: 'auto' }} 
            />

            <h4>Leave your information our team will reach out to you soon</h4>

                <Form fluid>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <IoMdContact className='icon-layout'/>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <Form.Group>
                                <Form.ControlLabel htmlFor='firstName'>First Name</Form.ControlLabel>
                                <Form.Control name='firstName' id='firstName' type='text' required />
                            </Form.Group>

                            <Form.Group style={{ marginLeft: '40px' }}>
                                <Form.ControlLabel htmlFor='lastName'>Last Name</Form.ControlLabel>
                                <Form.Control name='lastName' id='lastName' type='text' required />
                            </Form.Group>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex' }}>
                        <MdBusinessCenter className='icon-layout'/>
                        <Form.Group>
                            <Form.ControlLabel htmlFor='companyName'>Company Name</Form.ControlLabel>
                            <Form.Control name='companyName' id='companyName' type='text' required />
                        </Form.Group>
                    </div>

                    <div style={{ display: 'flex', width: '100%' }}>
                        <MdEmail className='icon-layout'/>
                        <Form.Group>
                            <Form.ControlLabel htmlFor='email'>Email</Form.ControlLabel>
                            <Form.Control name='email' id='email' type='email' required />
                        </Form.Group>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <MdPhone className='icon-layout'/>
                        <Form.Group>
                            <Form.ControlLabel htmlFor='phone'>Phone</Form.ControlLabel>
                            <Form.Control name='phone' id='phone' type='text' />
                        </Form.Group>
                    </div>
                    
                    <div style={{ display: 'flex' }}>
                        <MdLocationPin className='icon-layout'/>
                        <Form.Group>
                            <Form.ControlLabel htmlFor='state'>State</Form.ControlLabel>
                            <Form.Control name='state' id='state' type='text' required />
                        </Form.Group>
                    </div>
                        
                    <div style={{ display: 'flex' }}>
                        <MdNaturePeople className='icon-layout'/>
                        <Form.Group>
                            <Form.ControlLabel htmlFor='beneficiaries'>Beneficiaries</Form.ControlLabel>
                            <Form.Control name='beneficiaries' id='beneficiaries' type='text' required />
                        </Form.Group>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <FaSackDollar className='icon-layout'/>
                        <Form.Group>
                            <Form.ControlLabel htmlFor='assets'>Assets</Form.ControlLabel>
                            <Form.Control name='assets' id='assets' type='text' required />
                        </Form.Group>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <Form.Group>
                            <Button appearance="primary" type='submit'>Submit</Button>
                        </Form.Group>
                    </div>

                </Form>
            </div>
        </div>
    )
};

export default ContactPage;