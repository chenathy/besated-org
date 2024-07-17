import React from 'react';
import { Form, ButtonToolbar, Button, Schema } from 'rsuite'; 
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
                    <Form.Group>
                        <Form.ControlLabel htmlFor='firstName'>First Name</Form.ControlLabel>
                        <Form.Control name='firstName' id='firstName' type='text' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel htmlFor='lastName'>Last Name</Form.ControlLabel>
                        <Form.Control name='lastName' id='lastName' type='text' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel htmlFor='companyName'>Company Name</Form.ControlLabel>
                        <Form.Control name='companyName' id='companyName' type='text' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel htmlFor='email'>Email</Form.ControlLabel>
                        <Form.Control name='email' id='email' type='email' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel htmlFor='phone'>Phone</Form.ControlLabel>
                        <Form.Control name='phone' id='phone' type='text' />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.ControlLabel htmlFor='state'>State</Form.ControlLabel>
                        <Form.Control name='state' id='state' type='text' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel htmlFor='beneficiaries'>Beneficiaries</Form.ControlLabel>
                        <Form.Control name='beneficiaries' id='beneficiaries' type='text' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel htmlFor='assets'>Assets</Form.ControlLabel>
                        <Form.Control name='assets' id='assets' type='text' required />
                    </Form.Group>

                    <Form.Group>
                        <Button appearance="primary" type='submit'>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
};

export default ContactPage;