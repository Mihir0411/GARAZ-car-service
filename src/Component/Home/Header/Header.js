import React from 'react';
import HomeMain from '../HomeMain/HomeMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HomeMain></HomeMain>
        </div>
    );
};

export default Header;