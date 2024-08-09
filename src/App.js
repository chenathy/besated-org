import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ForEmployers from './Employers';
import ForAttorneys from './Attorneys';
import ForFinancialAdvisors from './FinancialAdvisor';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/employers' element={<ForEmployers/>} />
                    {/* <Route path='/professional' element={<ForAttorneys/>} /> */}
                    <Route path='/professional' element={<ForFinancialAdvisors/>} />
                    <Route path="/contact" element={<Contact />} /> 
                </Routes>
            </Router>
            <Footer />
        </div>

        // <div>
        //     <div className='container'>
        //         <h1>Hello, Welcome to Bestated LLC</h1>
        //     </div>
        //     <ContactPage/>
        // </div>
    );
};

export default App;