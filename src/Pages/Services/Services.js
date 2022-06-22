// import { useNavigate } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";

const Services = ({ place, handleBookNow }) => {
    const { name, img, pirce, duration, id } = place;
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/checkout")
    }

    return (
        <div className='service'>
            <div className="service-img">
                <img src={img} alt="" />
            </div>
            <div className="service-details">
                <h4>{name}</h4>
                <p>{duration}</p>
                <p><span>{pirce}</span></p>
                
                <button onClick={handleCheckout} className="service-btn">Book Now</button>
            </div>
        </div>
    );
};

export default Services;