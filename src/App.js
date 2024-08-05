import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import ContactPage from './Contact';
import './App.css';

const App = () => {
    return (
        <Router>
            <NavBar />
        </Router>
        // <div>
        //     <div className='container'>
        //         <h1>Hello, Welcome to Bestated LLC</h1>
        //     </div>
        //     <ContactPage/>
        // </div>
    );
};

export default App;