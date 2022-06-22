import React from 'react';
import './footer.css'

const Footer = () => {
    return (
       <footer>
        <div className="footer-container">
            <div className="footer-items">
                <div className='item'>
                    <h3>Travel Sense</h3>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                    </div>
                <div className='item'>
                    <p>col-1</p>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                    </div>
                <div className='item'> 
                    <p>col-2</p>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                    </div>
                <div className='item'>
                    <p>col-3</p>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                    </div>
                <div className='item2'>
                    <p>col-4</p>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum.</p>
                    </div>
            </div>
            <hr />
            <div className="footer-social">
                <div className="social">This for Social Icon</div>
                <div className="social-caption"><p>this is caption</p></div>
            </div>
        </div>
       </footer>
    );
};

export default Footer;