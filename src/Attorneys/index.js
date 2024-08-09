import React from 'react';
import './Attorneys.css';
import Hero from './Hero.png';
import HowIcon from './HowIcon.png';
import Group1 from './Group1.svg';
import Group2 from './Group2.svg';
import Group3 from './Group3.svg';
import Group4 from './Group4.svg';


const ForAttorneys = () => {
    return (
        <div className='Attorneys'>

            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Let Bestated grow your business and help more clients.</h1>
                    <h4>Join Bestated’s two-sided marketplace to expand your client base. Let us do the hard work of lead generation!</h4>
                    <div className='btn'>
                        <button className='contact-btn'>Get in contact</button>
                    </div>
                </div>

                <img 
                    src={Hero} 
                    alt='EmployerHero'
                />
            </div>

            <div className='How'>
                <div className='intro'>
                        <h2>Streamlining the process of estate planning</h2>
                        <p>
                            Bestated is a paradigm-shifting employee benefit, utilizing generative AI and Large Language Models (LLMs) to efficiently draft estate planning documents such as wills, power of attorney, and medical directives. 
                            By having employers add this to their benefits packages, we aim to make estate planning an easy and accessible process for the 67% of US adults who don’t currently have a will or estate plan. 
                            <br/><br/>
                            While the use of genAI can shorten the traditional process of drafting these legal documents, we still need our attorney partners to review and notarize them. 
                            This is where you come in! Join Bestated today to expand your client base, and stay updated with the latest in AI applications.
                            <br/><br/>
                            <span>Let’s get started &gt;</span>
                        </p>
                </div>

                <div className='secondary'>
                    <img
                        src={HowIcon}
                        alt='HowIcon'
                    />
                    <div className='steps'>
                        <h3>Here’s how it works:</h3>
                        <div className='step'>
                            <img
                                src={Group1}
                                alt='Group1'
                            />
                            <p>During their onboarding, your employee fills out a Bestated intake form.</p>
                        </div>
                        <div className='step'>
                            <img
                                src={Group2}
                                alt='Group2'
                            />
                            <p>
                                Using this form, our team utilizes state-of-the-art generative AI and Large Language Models (LLMs) 
                                to create drafts of their documents: wills, POAs, and medical directives.
                            </p>
                        </div>
                        <div className='step'>
                            <img
                                src={Group3}
                                alt='Group3'
                            />
                            <p>We then send the documents to a Bestated attorney partner in your employee’s state.</p>
                        </div>
                        <div className='step'>
                            <img
                                src={Group4}
                                alt='Group4'
                            />
                            <p>
                                Our attorney finalizes and notarizes it, Bestated signs off, 
                                and copies are sent out to employees and their beneficiaries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

};

export default ForAttorneys;