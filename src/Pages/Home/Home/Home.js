import './home.css'

import PackagesServices from '../PackagesServices/PackagesServices';
import Slider from '../Slider/Slider';
import PlacesInfo from '../../../hooks/placesInfo';
import Services from '../../Services/Services';
import { useState } from 'react';





const Home = () => {
    const [places, setPlaces] = PlacesInfo([]);

    const carouselCard = places.slice(0, 3);
    const services = places.slice(3, 9);

    return (
        <div id='hero-container'>
            <Slider />
            <div className='hero-details'>
                {
                    carouselCard.map(place =>
                        <PackagesServices
                            key={place.id}
                            place={place}
                        /> 
                    )
                }
            </div>
            <div className='services-container'>
                <h2>Choose your traveling package</h2>
                <div className='services'>
                {
                    services.map(place => <Services
                    key={place.id}
                    place = {place}
                    />)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;