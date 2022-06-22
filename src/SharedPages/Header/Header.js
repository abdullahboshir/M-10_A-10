import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth);

  
    return (
        <div id='header'>
            <nav className='header-container ms-5 me-5'>
                {/* <div className="nav-brand"><h3>TRAVEL SENSE</h3></div> */}
                <div className="nav-link">
                    <ul>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"}  to='/home'>HOME</NavLink>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"} to='/checkout'>CHECKOUT</NavLink>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"} to='/blogs'>BLOGS</NavLink>
                        <NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"} to='/about'>ABOUT</NavLink>
                        {
                            user?  <button className='logout-btn' onClick={() =>  signOut(auth)}>LOG OUT</button> :<NavLink className={({isActive}) => isActive? "active-nav": "inactive-nav"} to='/login'>LOGIN</NavLink>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;