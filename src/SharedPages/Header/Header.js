import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';



const Header = () => {
    return (
        <div id='header'>
            <nav className='header-container d-flex justify-content-between ms-5 me-5'>
                <div className="nav-brand"><h3>TRAVEL SENSE</h3></div>
                <div className="nav-link">
                    <ul>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"}  to='/home'>Home</NavLink>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"} to='/checkout'>Checkout</NavLink>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"} to='/blogs'>Blogs</NavLink>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"} to='/about'>About</NavLink>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"} to='/login'>Login</NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;