import React from 'react';
import logo from'../../images/logo.png'
import'./Header.css'
const Header = () => {
    return (
        <div>
            <img className="logo"  src={logo} alt="" />
        
        <nav className='nav'>
            <a href="shop">shop</a>
            <a href="orders"> Order-Review</a>
            <a href="manage">Manage inventory </a>
        </nav>
        </div>
    );
};

export default Header;