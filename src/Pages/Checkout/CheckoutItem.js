import React, { useState } from 'react';
import PlacesInfo from '../../hooks/placesInfo';
import Services from '../Services/Services';
import Checkout from './Checkout';

const CheckoutItem = () => {
    const [places, setPlaces] = PlacesInfo([]);
    const [checkout, setCheckout] = useState({});


     
    const handleBookNow = id => {
        const check = places.find(place => place.id === id);
        setCheckout(check)
    }
  
    return (
        <div>
            <div className='services-container'>
                <h2>Choose your traveling package</h2>
                <div className='services'>
              
                </div>
        </div>
        </div>
    );
};

export default CheckoutItem;