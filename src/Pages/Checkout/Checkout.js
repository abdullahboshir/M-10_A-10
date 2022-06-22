import React, { useState } from 'react';
import PlacesInfo from '../../hooks/placesInfo';

const Checkout = () => {
    return (
        <form className='login-page checkout'>
        {/* <img src={bg} alt="" /> */}
       <div className="signup-container">
           <div className='signup'>
               <h2>Booking Now</h2>
               <div className='field'>
                   <input placeholder='Full Name' required />
                   <input placeholder='Address' required />
                   <input placeholder='Phone Number' required />
                   <input placeholder='Card Number' required />
               </div>

               <div>
               <div className='name'>
                  
                   <input className='firsName' placeholder='Expire Date' required />
                
                 <input className='lastName' placeholder='CVC/CCV' required />
              
               </div>
               </div>
              <div className='register-btn'>
            <input className='checkout-btn' type="submit" value="Submit" />
              </div>
           </div>
       </div>
   </form>
    );
};

export default Checkout;