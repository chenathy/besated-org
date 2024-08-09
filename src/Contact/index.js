import React, { useState } from 'react';
import { Form, FormControl, RadioGroup, Radio } from 'rsuite'; 
import 'rsuite/dist/rsuite.min.css';
import '../App.css';
import './Contact.css';
import Hero from './Hero.png';


const Contact = () => {


    const clientTypeOptions = [
        {label: 'An employer interested in employer-sponsored wills', value: 'employer'},
        {label: 'An attorney interested in becoming a Bestated partner', value: 'attorney'},
        {label: 'A financial advisor interested in the beneficiary API', value: 'financialAdvisor'},
        {label: 'An individual looking for more information', value: 'individual'},
        {label: 'Other', value: 'other'}
    ] 

    return (
        <div className='Contact'>

            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Get in contact!</h1>
                    <p>
                        Tell us a little bit about yourself and who you are. A member of our team will be in contact with you shortly! 
                        If you’d like to reach us directly, you can do so at <span>hello@bestated.ai</span>.
                    </p>
                    <div className='btn'>
                        <button className='contact-btn'>Get in contact</button>
                    </div>
                </div>

                <img 
                    src={Hero} 
                    alt='HomeHero'
                />

            </div>

            <div className='Form-section'>
                <div className='form'>
                    
                    <Form
                        fluid
                        // formValue={formValue} 
                        // onChange={handleChange} 
                        // onSubmit={handleSubmit}
                    >
                        <Form.Group className='form-group'>
                            <Form.ControlLabel htmlFor='name'>Name *</Form.ControlLabel>
                            <Form.Control 
                                name='clientName' 
                                id='clientName'
                                type='text' 
                                required 
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.ControlLabel>Who are you ? *</Form.ControlLabel>
                            <RadioGroup name='type'>
                                {clientTypeOptions.map(option => (
                                    <Radio
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </Radio>
                                ))}

                            </RadioGroup>
                        </Form.Group>

                        {/* <FormGroup>
                            <Select name="selectedOption" label="Select an option">
                            {clientTypeOptions.map((option) => (
                                <Option 
                                    key={option.value} 
                                    value={option.value}
                                >
                                    {option.label}
                                </Option>
                            ))}
                            </Select>
                        </FormGroup> */}
                        

                        <button className='submit-btn'>Submit Message</button>

                    </Form>
                </div>
            



            </div>

        </div>
    )
};

export default Contact;